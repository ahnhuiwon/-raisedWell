/**
 * 이상 에이전트 데미지 계산 상속 클래스
 */
class AnomallyAgentCalc extends Calculate {

    constructor( id: string ) {
        super( id );
    }


    /**
     * 이상 에이전트 최종 피해량 계산 메소드
     * 
     * @param { Number } attackPower 공격력
     * @param { Number } anomallyMastery 이상 마스터리
     * 
     * @returns 최종 피해량
     */
    calcAnomallyAgentDamage( attackPower: number, anomallyMastery: number ) {

        /**
         * 최종 피해량 = 기본 DMG × 이상 피해 계수
         */
        this._attackPower = attackPower;

        const baseDamage = this.calculateBaseDamage();

        return baseDamage * Number( ( 1 + anomallyMastery / 100 ) );

    }
}