import * as React from 'react';
import { Slide } from '../../../../models';
import SlidePreview from './SlidePreview';
import SlideCreateCard from './SlideCreateCard';

interface Props {
    slides: Slide[],
    selectedSlideId: number,
    moveSlide: (payload: { from: number, to: number }) => void,
    shareSlide: (id: number) => void,
    copySlide: (id: number) => void,
    deleteSlide: (id: number) => void,
    selectSlide: (id: number) => void,
    createSlide: () => void
}

const placeholder = document.createElement("li");
placeholder.className = "placeholder";

export default class DraggableSlideList extends React.Component<Props> {
    dragged?: any = undefined;
    over?: any = undefined;
    nodePlacement?: any = undefined;

    public render() {
        const renderSlidePreviews = (slides: Slide[]) => {
            return slides.map((slide, idx) => {
                return (
                    <li data-id={idx}
                        key={'slide' + slide.id}
                        draggable={true}
                        onDragEnd={this.dragEnd}
                        onDragStart={this.dragStart}>
                        <SlidePreview
                            idx={idx}
                            slide={slide}
                            active={slide.id === this.props.selectedSlideId}
                            onShare={this.props.shareSlide}
                            onCopy={this.props.copySlide}
                            onDelete={this.props.deleteSlide}
                            onClick={this.props.selectSlide}
                        />
                    </li>
                )
            })
        };
        return (
            <>
                <ul onDragOver={this.dragOver}>
                    {renderSlidePreviews(this.props.slides)}
                </ul>
                <SlideCreateCard onClick={this.props.createSlide} />
            </>
        )
    }

    dragOver = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
        if (!this.dragged) {
            return;
        }
        this.dragged.style.display = "none";
        let target = e.target as HTMLElement;
        if (target.className === "placeholder" || target.tagName === 'UL') {
            return;
        }
        while (target.tagName !== 'LI') {
            target = target.parentNode as HTMLElement;
        }
        this.over = target;
        const relY = e.clientY - this.over.offsetTop;
        const height = this.over.offsetHeight / 2;
        let parent = e.target as HTMLElement;
        while (parent.tagName !== 'UL') {
            parent = parent.parentNode as HTMLElement;
        }
        while (target.tagName !== 'LI') {
            target = target.parentNode as HTMLElement;
        }
        if (relY > height) {
            this.nodePlacement = "after";
            parent.insertBefore(placeholder, target.nextElementSibling);
        }
        else if (relY < height) {
            this.nodePlacement = "before"
            parent.insertBefore(placeholder, target);
        }
    }
    dragEnd = (e: React.DragEvent<HTMLElement>) => {
        if (!this.dragged || !this.over) {
            return;
        }
        this.dragged.style.display = "block";
        if (!this.dragged.parentNode.contains(placeholder)) {
            return;
        }
        this.dragged.parentNode.removeChild(placeholder);
        const from = Number(this.dragged.dataset.id);
        let to = Number(this.over.dataset.id);
        if (from < to) {
            to--
        };
        if (this.nodePlacement === "after") {
            to++
        };
        this.props.moveSlide({ from, to });
    }

    dragStart = (e: React.DragEvent<HTMLElement>) => {
        let target = e.currentTarget as HTMLElement;
        while (target.tagName !== 'LI') {
            target = target.parentNode as HTMLElement;
        }
        this.dragged = target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData("text/html", e.currentTarget.innerHTML);
    }
}