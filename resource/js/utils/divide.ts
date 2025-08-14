
/**
 * 에이전트 특성 및 특수 능력치 분기 함수
 * @param { Object } agentObj 에이전트 정보 객체
 * @param { string } mode 보통/종결 모드
 * @param { Obejct } formed 강공, 이상 전용 데이터
 * @param { Array } inputList 지원, 격파 전용 데이터
 * @returns 
 */
const divideAgent = ( agentObj: Agent, mode: string, formed: any, inputList: any  ) => {

    let result = 0;
    let sumPoint = 0;
    let userAgentCalc = null;
    let amountAgentCalc = null;
    let userResultDamage = null;
    let amountResultDamage = null;

    switch( agentObj.type ) {
        case "명파" :
        case "강공" :
            if( agentObj.korName === "의현" ) {

                userAgentCalc = new CriticalAgentCalc( "userAgentCalc" );
                amountAgentCalc = new CriticalAgentCalc( "amountAgentCalc" );
                
                userResultDamage = userAgentCalc.calcCriticalAgentDamage( 
                    Number( formed["관입력"].user ), 
                    Number( formed["치명타 확률"].user ), 
                    Number( formed["치명타 피해"].user )
                );

                amountResultDamage = amountAgentCalc.calcCriticalAgentDamage( 
                    Number( formed["관입력"].amount ), 
                    Number( formed["치명타 확률"].amount ), 
                    Number( formed["치명타 피해"].amount )
                );

                result = Math.floor((userResultDamage / amountResultDamage) * 100);
            }

            if( agentObj.korName !== "의현" ) {

                userAgentCalc = new CriticalAgentCalc( "userAgentCalc" );
                amountAgentCalc = new CriticalAgentCalc( "amountAgentCalc" );

                userResultDamage = userAgentCalc.calcCriticalAgentDamage( 
                    Number( formed["공격력"].user ), 
                    Number( formed["치명타 확률"].user ), 
                    Number( formed["치명타 피해"].user )
                );
                amountResultDamage = amountAgentCalc.calcCriticalAgentDamage( 
                    Number( formed["공격력"].amount ), 
                    Number( formed["치명타 확률"].amount ), 
                    Number( formed["치명타 피해"].amount )
                );

                result = Math.floor((userResultDamage / amountResultDamage) * 100);

            }

            break;

        case "이상" :
            userAgentCalc = new AnomallyAgentCalc( "userAgentCalc" );
            amountAgentCalc = new AnomallyAgentCalc( "amountAgentCalc" );

            userResultDamage = userAgentCalc.calcAnomallyAgentDamage(
                Number( formed["공격력"].user ), 
                Number( formed["이상 마스터리"].user ), 
            );

            amountResultDamage = amountAgentCalc.calcAnomallyAgentDamage( 
                Number( formed["공격력"].amount ),
                Number( formed["이상 마스터리"].amount )
            );

            result = Math.floor((userResultDamage / amountResultDamage) * 100);

            break;
        
        case "격파" : 
        case "지원" : 
          
            inputList.forEach( ( abilityList: any ) => {
                switch( abilityList.name ) {
                    case "치명타 확률" :
                        sumPoint += Number( Math.min( abilityList.user, abilityList.standard ) ) / Number( abilityList.standard );
                        break;
                    case "이상 장악력" :
                        sumPoint += Number( Math.min( abilityList.user, abilityList.standard ) ) / Number( abilityList.standard );
                        break;
                    case "충격력" :
                        sumPoint += Number( Math.min( abilityList.user, abilityList.standard ) ) / Number( abilityList.standard );
                        break;
                    default :
                        sumPoint += Number(abilityList.user) / Number(abilityList.standard);
                }
            });

            result = Math.floor((sumPoint / inputList.length) * 100);

            break;
    }

    return result;

}