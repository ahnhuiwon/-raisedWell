type AbilityName =
  | "HP"
  | "공격력"
  | "방어력"
  | "충격력"
  | "치명타 확률"
  | "치명타 피해"
  | "이상 장악력"
  | "이상 마스터리"
  | "관통률"
  | "에너지 자동 회복";

type AbilityItem = {
  valid: boolean;
  amount: number;
} & {
  [K in AbilityName]?: string; // 능력치 이름은 한 개만 옵니다
};

interface Agent {
  id: number;
  engName: string;
  korName: string;
  image: string;
  ability: AbilityItem[];
}


interface AbilityObj {
  name: string,
  user: number;
  standard: number;
}