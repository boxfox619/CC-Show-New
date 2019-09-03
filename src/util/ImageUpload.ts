import axios from 'axios';
const uploadImageFile = async (formData: FormData) => {
  const res = await axios.post('/api/upload/image/', formData);
  return res.data.image.url;
}

export const uploadImage = async (onStart?: () => void) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  const promise = new Promise((resolve, reject) => {
    input.onerror = (e) => {
      reject(e);
    }
    input.onabort = () => {
      reject();
    }
    input.onchange = () => {
      if (!!onStart) {
        onStart();
      }
      setTimeout(async () => {
        if (!input.files || input.files.length === 0) {
          reject();
          return;
        }
        try {
          const file = input.files[0];
          const formData = new FormData();
          formData.append('image', file);
          const res = await uploadImageFile(formData);
          if (!!res) {
            resolve(res);
            return;
          }
          reject();
        } catch (err) {
          reject();
        }
      }, 1000);
    }
  });
  input.click();
  return promise;
}

export const loadImage = () => {
  const fr = new FileReader();
  const promise = new Promise<string>((resolve, reject) => {
    fr.onload = () => {
      resolve(fr.result as string);
    }
    fr.onerror = (e) => {
      reject(e);
    }
    fr.onabort = () => {
      reject();
    }
  })
  const inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.addEventListener("change", () => inputElement.files && fr.readAsDataURL(inputElement.files[0]));
  inputElement.dispatchEvent(new MouseEvent("click"));
  return promise;
}
export default uploadImage;