import { AssetShopItem } from "@/models";
import { ShopUsecase } from "@/core/domain";

export class ShopApi implements ShopUsecase {
  search = async (text: string): Promise<AssetShopItem[]> => {
    return [
      new AssetShopItem(1, '테스트 에싯', '설명설명설명', 'https://k.kakaocdn.net/dn/C5sq6/btqyapmPfhm/aUAM6ZoLzuDJLrWOpFvKJK/img.jpg', 3.5, false),
      new AssetShopItem(2, '테스트 에싯', '설명설명설명', 'https://k.kakaocdn.net/dn/C5sq6/btqyapmPfhm/aUAM6ZoLzuDJLrWOpFvKJK/img.jpg', 3.5, false),
      new AssetShopItem(3, '테스트 에싯', '설명설명설명', 'https://k.kakaocdn.net/dn/C5sq6/btqyapmPfhm/aUAM6ZoLzuDJLrWOpFvKJK/img.jpg', 3.5, false),
      new AssetShopItem(4, '테스트 에싯', '설명설명설명', 'https://k.kakaocdn.net/dn/C5sq6/btqyapmPfhm/aUAM6ZoLzuDJLrWOpFvKJK/img.jpg', 3.5, false),
    ]
  }
}