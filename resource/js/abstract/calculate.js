"use strict";
/**
 * 에이전트 데미지 계산
 *
 * 추상 클래스
 */
class Calculate {
    constructor(id) {
        this.id = id;
        this._attackPower = 0;
        this._skillCoefficient = 1.5;
    }
    /**
     * 에이전트 공격력 설정
     *
     * @param { Number } attack 에이전트 공격력
     */
    set attackPower(attack) {
        this._attackPower = attack;
    }
    /**
     * 에이전트 기본 데미지 계산 메소드
     *
     * @returns { Number } 기본 데미지
     */
    calculateBaseDamage() {
        /**
         * 기본 DMG = 공격력 × 스킬계수
         */
        return Number(this._attackPower * this._skillCoefficient);
    }
}
