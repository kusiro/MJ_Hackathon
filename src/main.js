import styles from './css/_bits.scss';
import Html from './template.html';
import React from "react";
import ReactDOM from "react-dom";
import scrollSpeed from "./js/scroll-parallax.js";
import ClickEvent from "./js/click_event.js";
import ScrollEvent from './js/scroll_event.js';
import ScrollReveal from "./js/scroll_reveal.js";

class Selection_b extends React.Component {
    render() {
        /*
            Edit `data-target` to tell javascript which element id should it scrolls to.
            Javascript can get the data in attributes prefixed with `data-`
        */
        return(
            <div id="selectionBar">
                <div class="selection" data-target="intro">Intro</div>
                <div class="selection" data-target="join_us">Join us</div>
                <div class="selection" data-target="schedule">Schedule</div>
                <div class="selection" data-target="sponsor">Partners</div>
                <div class="selection" data-target="footer">Contact</div>
            </div>
        );
    }
}
class Top extends React.Component {
    render() {
        return(
            <div class="navbar">
                <div class="logo_sqr">
                    <p class="logo_day"><b>10/</b>29.30</p>
                    <div class="line"></div>
                    <p className="localtion">交大工程四館</p>
                </div>
                <div class="title">
                    <h1>MEI-CHU</h1>
                    <h1>HACKATHON</h1>
                </div>
            </div>
        );
    }
}
class Intro extends React.Component {
    render() {
        return(
            <div>
                <div class="content_1">
                    <div class="partical">
                        <h1>什麼是黑客松？</h1>
                        <div class="partical_block">
                            <b>Hackathon顧名思義，就像是工程界的馬拉松</b>
                            <p>在一兩天內，日以繼夜地用最短的時間，將腦海中的創意構想，
                            實作成系統的雛型(prototype)，然後發表讓大家觀摩或給予建議。
                            參加的團隊組成不限於程式設計師，還包括：美術設計、專案經理……等等。
                            最後作品的成敗否還不僅考驗團隊成員的技術熟練度也包含：
                            團隊的合作精神以及對需求的觀察力和構思的創新度等等。</p>
                        </div>
                    </div>
                </div>
                <div class="content_1">
                    <div class="partical">
                        <h1>梅竹黑客松有什麼不一樣？</h1>
                        <div className="partical_block">
                            <p>目前坊間的類似活動，分為兩種：「傳統黑客松」以及「企業自行舉辦的黑客松」
                            傳統黑客松由參加隊伍發想提案，擁有近乎絕對的自由，但提供的協助與引導少，
                            不利經驗較少的學生團隊，完成作品的門檻提高，構想容易偏離現實考量，落入為創新而創新的迷思；</p>
                        </div>
                        <div className="partical_block">
                            <p>反之，企業自行舉辦的黑客松多半聚焦在自家公司所遇到的瓶頸，出題的範圍比較侷限，
                            所提供的工具也以主辦企業本身自家的技術為主。有鑑於前兩者各有利弊，「梅竹黑客松」應運而生，
                            這次活動的開發主題皆由活躍於業界的企業所建議，開發主題的大方向與市場接軌
                            同時來自不同企業，各自提供獨家技術與資源，輔助參加者開發作品，
                            兼顧發想的自由空間與提案本身的市場可行性。參賽者可以發揮所長，
                            藉著企業的協助實現創意，並能和企業先進面對面交流想法。
                            而負責決定主題與引導的企業，不僅能挖掘人才，也同時藉此刺激自身一同創新思考。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="content_1">
                    <div class="partical">
                        <h1>參加梅竹黑客松的好處</h1>
                        <div className="partical_block">
                            <p>此活動是與企業合作出資源(硬體或API等)的方式進行，參加者能與企業在第一線接觸交流，並且提升其技術力。
                            只要完整參與兩天一夜的活動，一律授予梅竹黑客松專屬紀念品和活動參與證書！
                            另外，主辦單位將據依當天參與者的整體表現，選出幾組表現優秀隊伍 (視報名人數情況調整)額外頒授獎勵。
                            除此之外，主辦單位亦將甄選出UI/UX表現優秀的隊伍另外頒予獎勵。</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
class Join extends React.Component{
    render(){
        return(
            <div class="content_2">
                <div class="partical">
                    <h1>報名流程</h1>
                    <div className="partical_block">
                        <p>填報名表及選企業志願序->收信確認該隊伍的引導企業->繳費->報名成功!
                        報名程序分為兩步驟：「網路報名」及「繳費」。
                        請注意！只完成「網路報名」但未「繳費」視同未完成報名程序，自動放棄參加資格，原名額將依序釋出給備取的參加者。<br/>
                        網路報名：填寫基本資料、選填題目類型志願，10/04 截止。網路報名成功後，大會將寄發確認信。</p>
                    </div>
                    <div className="partical_block">
                        <p>10/07 大會公告錄取參賽隊伍以及所屬企業
                        10/07 第一階段報名成功隊伍繳費期限<br/>
                        10/10 大會發出候補通知<br/>
                        10/17 候補報名成功隊伍繳費期限<br/>
                        10/29、10/30 Hackathon當天：實作。</p>
                    </div>
                </div>
                <div class="partical">
                    <h1>報名須知</h1>
                    <div className="partical_block">
                        <p>請注意：填寫完個人資料需按下報名表上方"提交該成員報名資訊"
                        報名前請詳細閱讀活動規章
                        報名費用：300 元+ 200 元保證金(全程參與活動將會"全額"退還保證金)
                        越早報名機率越大
                        </p>
                    </div>
                    <div className="partical_block">
                        <p>參賽隊伍可自由使用各企業提供的資源做整合，但是一定要使用到自己所屬引導企業的資源
                        企業資訊請詳見「合作引導企業」</p>
                    </div>
                    <div className="partical_block">
                        <p>團隊報名者：每一隊2~5人，團隊中至少要有一人具備使用企業資源的能力。
                        請於網路報名時依照志願序填寫心目中的企業，並且儘量在專長中說明團隊或個人所具備的技術或其他能力。
                        完成後主辦單位將會分配適當的企業給各個團隊。</p>
                    </div>
                    <div className="partical_block">
                        <p>個人報名者：個人報名者在報名表填寫隊伍隊長欄位即可。
                        請務必明確填寫個人的專長，如果能夠在「備註」欄位自我介紹更好，
                        以利主辦單位幫忙媒合適當的合作伙伴。</p>
                    </div>
                    <div className="partical_block">
                        <p>主辦單位將會每天更新各企業剩下的組數，並於報名後一天通知隊伍選上的企業。
                        主辦單位不提供電腦給參賽者，請自行攜帶筆記型電腦。活動當天提供電源和無線網路。</p>
                    </div>
                </div>
            </div>
        );
    }
}
class Schedule extends React.Component{
    render(){
        return(
            <div class="content_3">
                <h1><b>S</b>chedule</h1>

                <div className="sche_cont">
                    <div class="sche">
                        <div class="day">
                            Day1
                        </div>
                        <div class="event">
                            <div class="event_text"><p className="schedule_contain">報到 & 相見歡</p><p class="time_text"><b>08</b>30</p></div>
                            <div class="event_text"><p className="schedule_contain">開場 & 來賓致詞</p><p class="time_text"><b>09</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">公布題目&技術人員說明</p><p class="time_text"><b>10</b>30</p></div>
                            <div class="event_text"><p className="schedule_contain">開始coding</p><p class="time_text"><b>12</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">午餐時間</p><p class="time_text"><b>13</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">持續 coding</p><p class="time_text"><b>15</b>30</p></div>
                            <div class="event_text"><p className="schedule_contain">下午茶</p><p class="time_text"><b>16</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">持續coding</p><p class="time_text"><b>18</b>30</p></div>
                            <div class="event_text"><p className="schedule_contain">晚餐時間+野台表演</p><p class="time_text"><b>19</b>30</p></div>
                            <div class="event_text"><p className="schedule_contain">戰鬥永無止盡</p><p class="time_text"><b>19</b>30</p></div>
                        </div>
                    </div>
                    <div class="sche">
                        <div class="day">
                            Day2
                        </div>
                        <div class="event">
                            <div class="event_text"><p className="schedule_contain">早餐時間</p><p class="time_text" ><b>07</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">最後衝刺</p><p class="time_text" ><b>08</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">午餐時間</p><p class="time_text" ><b>11</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">最後衝刺</p><p class="time_text" ><b>12</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">各組擺攤demo</p><p class="time_text" ><b>14</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">交流時間</p><p class="time_text" ><b>15</b>30</p></div>
                            <div class="event_text"><p className="schedule_contain">決賽</p><p class="time_text" ><b>16</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">評審講評</p><p class="time_text" ><b>16</b>40</p></div>
                            <div class="event_text"><p className="schedule_contain">贊助商活動宣傳</p><p class="time_text" ><b>17</b>00</p></div>
                            <div class="event_text"><p className="schedule_contain">頒獎典禮及閉幕</p><p class="time_text" ><b>17</b>10</p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class Sponsor extends React.Component{
    render(){
        return(
            <div class="content_5">
                <h1>Sponsor</h1>
                <hr/>
                <div class="sonsor_logo">
                    <img src="./src/Img/Callyellow.png"/>
                    <img src="./src/Img/Garena.jpg"/>
                    <img src="./src/Img/Bank.png"/>
                    <img src="./src/Img/DNArails.png"/>
                    <img src="./src/Img/ironyun.png"/>
                </div>
            </div>
        );
    }
}
class Footer extends React.Component{
    render(){
        return(
            <div class="content_6">
                <div class="staff">
                    <h1>工作人員</h1>
                    <p>總召：魚丸</p>
                    <p>副召：慈慈</p>
                    <p>公關：ㄊㄟˇ博、涵宇、怡瑄、楷恩、抹茶、阿原</p>
                    <p>文宣：雅瑄、彥傑、允真</p>
                    <p>美宣：COLA</p>
                    <p>總務：阿蓉</p>
                    <p>活動：Vera</p>
                    <p>場器：Donny、大頭、小蝸</p>
                    <p>網路：奈奈、減薪、佳安、欣蓓、Sunset</p>
                    <p>相手：湯圓</p>
                </div>
                <div class="staff">
                    <h1>主辦單位</h1>
                    <p>國立交通大學</p>
                    <p>國立清華大學</p>
                    <h1>協辦單位</h1>
                    <p>高階繪圖與立體視訊基礎技術研發中心</p>
                    <p>行動APP暨遊戲產業發展聯盟</p>
                    <p>電腦視覺監控產學研聯盟</p>
                    <p>交大產學運籌中心</p>
                    <p>清大產學運籌中心</p>
                    <p>AppUniverz</p>
                </div>
                <div class="staff">
                    <h1>Email</h1>
                    <p>hacknctu@googlegroups.com</p>
                    <h1>Facebook專頁</h1>
                    <p>https://www.facebook.com/HackMeiChu</p>
                    <h1>Facebook社團</h1>
                    <p>https://www.facebook.com/groups/hacknctu/</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Schedule/>,document.getElementById('schedule'));
ReactDOM.render(<Footer/>,document.getElementById('footer'));
ReactDOM.render(<Sponsor/>,document.getElementById('sponsor'));
ReactDOM.render(<Join/>,document.getElementById('join_us'));
ReactDOM.render(<Intro/>,document.getElementById('intro'));
ReactDOM.render( <Top/>, document.getElementById("top"));
ReactDOM.render( <Selection_b/>, document.getElementById("Bar"));
