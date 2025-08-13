/**
 * 치명타 기반 에이전트 데미지 계산 상속 클래스
 */
class CriticalAgentCalc extends Calculate {

    constructor( id: string ) {
        super( id );
    }


    /**
     * 치명타 에이전트 최종 피해량 계산 메소드
     * 
     * @param { Number } attackPower 공격력
     * @param { Number } criticalRate 크리티컬 확률
     * @param { Number } criticalDamage 크리티컬 피해량
     * 
     * @returns 최종 피해량
     */
    calcCriticalAgentDamage( attackPower: number, criticalRate: number, criticalDamage: number ) {

        /**
         * 최종 피해량 = 기본 DMG × (1 + 치명타율 × 치명타피해)
         */
        this._attackPower = attackPower;

        const baseDamage = this.calculateBaseDamage();

        return baseDamage * Number( ( 1 + criticalRate * criticalDamage ) );

    }

}