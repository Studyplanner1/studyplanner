⏰ 중앙 플래너 ⏰
========================

### 열공하는 사람들을 위한 웹 형식 스터디플래너

![로고](/final/source/Study_planner-title.png)
<br/><br/><br/><br/>

💻프로젝트 개요
------------------------
- 시중에 일정관리하는 웹캘린더는 많지만, 공부하는 사람들을 위한 스터디플래너는 마땅치 않은 상황에서 아이디어를 모색하기 시작했습니다.
- 모바일에서 사용가능한 스터디플래너 앱은 많지만, 주변에서 공부 중 핸드폰을 사용하니 집중력이 흐트러진다는 불편함을 호소하는 모습을 볼 수 있었습니다. 우리 팀은 이러한 불편함을 개선하고자, 웹을 통해 사용할 수 있는 스터디플래너를 구상하게 되었습니다.
<br/><br/><br/>

🖥 개발 환경
------------------------
![개발환경](/final/source/Stack.png)
<br/><br/><br/>


✏ 주요기능 및 담당
------------------------
### Calendar - 김태근
1. 캘린더 html, css, js
2. PPT Design
<br/><br/>
> ##### 달력
> - 달력 지난 달, 다음 달 기능 구현 `css` `js`
> - 미니 캘린더로 메인 캘린더와 날짜 비교 기능 구현 `css` `js`
> - 화면에 보여지는 지난 달, 다음 달 클릭 시 해당 달로 이동 `js` 

> ##### 일정 추가 및 조회
> - 활성화된 날짜 일정 확인 기능 구현`js`
> - 이미 추가된 일정 확인 기능 구현`js`
> - 이벤트 추가 기능 (일정명, 시간, 장소) 구현`css` `js`
> - 이벤트 추가 시 Add Event 버튼이나 '+'버튼, 화면 어디든 클릭 시 이벤트 활성화 취소 기능 구현 `css` `js`
> - 시간(24:00) 입력 양식에 맞지 않게 입력 불가 `js`
> - Today 버튼 클릭 시 현재 달로 이동 기능 구현 `js`
<br/>

### Todo list / Side menu - 조예원
1. 투두리스트의 html, css, js
2. 사이드메뉴의 html, css, js
3. 프레젠테이션
<br/><br/>
> #### 할일 추가
> - 할일 작성 기능 `html` `css`
> - 추가 버튼이나 엔터키를 누르면 작성한 할일이 하단 리스트에 추가되는 기능 `js`

> #### 할일 수정, 삭제
> - 할일 추가 시 우측에 수정, 삭제 버튼이 함께 생성되도록 구현 `css` `js`
> - 이미 작성해놓은 할일을 수정 `js`
> - 완료한 할일은 수정할 수 없음 `js`
> - 삭제 버튼을 눌러 할일을 삭제 `js`
> - 모두삭제 버튼을 통해 할일 리스트를 초기화 `js`

> #### 할일 진행률 표시 바
> - 할일 리스트를 클릭할 때마다, 할일 완료율을 %로 계산하여 프로그레스바가 새로고침됨 `css` `js`
> - 프로그레스바가 100%가 되면 커비가 밥을 먹는 애니메이션 동작 `css` `js`

> #### Side menu
> - 버튼을 클릭하여 사이드메뉴를 숨겼다가 펼치는 기능 `css`
> - 각 메뉴 hover 시 눈에 띄일 수 있는 애니메이션 부여 `css`
<br/>

#### Login page / reading List - 권상지
1. 로그인 페이지 html,css,js
2. ReadingList html,css,js
<br/><br/>
> #### 할일 진행률 표시 바
> - 로그인 버튼을 클릭 시 다음 페이지로 넘어가도록 구현 `css` `js`
> - 회원가입, 아이디/비번찾기 등 로그인페이지에서 필요한 부분을 빠르게 파악할 수 있도록 hover 기능 추가 `css` `js`

> #### 할일 진행률 표시 바
> - 독서리스트 '+' 버튼 또는 '-'버튼 클릭 시 행 추가, 삭제 되는 이벤트 구현 `css` `js`
> - 기본 행 값을 1로 설정하여 마지막 1개 행 삭제 버튼 클릭 시 삭제 할 수 없다고 알림 메세지가 나오도록 구현 `css` `js`
> - 완독여부 기능은 input태그가 아닌 option 값을 주어 시각적으로 빠르게 O,X 여부를 파악할 수 있도록 구현 `css` `js`
<br/>

#### Timer / Tutorial - 이채원
1. 타이머 페이지 html,css,js
2. Tutorial, Main 페이지 html,css,js
<br/><br/>
> #### 현재 시간
> - Date() 통해서 현재 시간을 받아, 년, 월, 일, 시간, 분, 초 단위로 나누어 작성 `js`
> - setInterval() 통해 1초에 1번씩 작동하도록 설정. `js`

> #### D-day  설정 및 표시
> - Date() 통해서 오늘 날짜를 받고, html의 input 태그에서 date type을 통해 지정 날짜를 입력받도록 구현 `js`
> - 두 시간상의 차를 이용하면 milsecond 단위로 나오기 때문에 해당 수에 1000,60,60,24 순으로 곱하여 '일'을 구현 `js`

> #### timer 25분, 5분, 1분 countdown 형식의 timer
> - 해당 시간을 클릭하면 정해진 시간의 countdown 기능. `js`
> - 중복 클릭시 함수가 중복실행 되지 않도록 실행에 대한 조건을 만듦. `js`
> - 시간이 지나는 것을 1초마다 볼 수 있도록 구현 `js`
> - 지정한 시간이 끝나면 00:00 으로 정지되도록 구현 `js`

> #### 공부시간 측정 stopwatch
> - start 후 stop을 누르면 측정된 시간이 하단에 캐릭터와 함께 표시되도록 구현  `js`
> - 다시 start 버튼을 누르면 정지되었던 시간에 이어서 시간이 측정되도록 구현 `js`
> - reset버튼을 누르면 모두 초기화 되도록 구현 `js`

> #### Tutorial
> - 전체화면 css, 색상과 js clickevent를 통하여  클릭순서 제한 및 해당 event 삭제 기능. `css` `js`
> - 사용자 편의를 위한 tutorial 구성. `css` `js`
<br/><br/><br/>

👍 중앙 플래너만의 장점
------------------------
#### 효율 UP!
- 공부하는 사람들을 위해 필요한 기능을 한 곳에 모아두어 빠르고 효율적인 사용이 가능합니다.

#### 집중력 UP!
- 사용량이 많지 않거나, 쓸모 없는 기능을 제거했습니다.
- 최소한의 기능을 통해 편의성을 높이고 집중력이 흐트러지는 것을 방지합니다.

#### 심플한 UI
- 전체적인 UI 디자인을 심플하게 구성하여 사용 중의 혼란을 줄이고, 사용자의 경험을 극대화 시켰습니다.
<br/><br/><br/>

🔎 향후 업데이트 계획
------------------------
- 데이터 베이스와 연동하여 로그인 기능 추가
- 환경설정 기능 추가 (다크모드, 음력날짜 보기, 개인 프로필)
- 타이머에 기록된 공부 시간을 캘린더와 연동
- 캘린더와 투두리스트 간 오늘 할일 및 일정을 공유
