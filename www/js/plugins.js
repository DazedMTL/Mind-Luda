// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins = [
  {
    name: "Community_Basic",
    status: true,
    description: "基本的なパラメーターを設定するプラグインです。",
    parameters: {
      cacheLimit: "20",
      screenWidth: "816",
      screenHeight: "624",
      changeWindowWidthTo: "",
      changeWindowHeightTo: "",
      renderingMode: "auto",
      alwaysDash: "on",
    },
  },
  {
    name: "MadeWithMv",
    status: false,
    description:
      'メイン画面へ進む前に、"Made with MV"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。',
    parameters: {
      "Show Made With MV": "true",
      "Made with MV Image": "MadeWithMv",
      "Show Custom Splash": "false",
      "Custom Image": "",
      "Fade Out Time": "120",
      "Fade In Time": "120",
      "Wait Time": "160",
    },
  },
  {
    name: "BattlebustPict",
    status: true,
    description: "ver1.02 バトル中のピクチャ表示",
    parameters: {
      startId: "50",
      middying: "50",
      orizin: "1",
      pictX: "620",
      pictY: "350",
      scaleX: "100",
      scaleY: "100",
      equipX: "0 0 620 620 0 0",
      equipY: "0 0 350 350 0 0",
      indexaddX: "150",
      dyingtone: "64",
    },
  },
  {
    name: "PD_Transition",
    status: true,
    description: "画像によるトランジション演出機能を追加します。",
    parameters: { Duration: "48" },
  },
  {
    name: "PD_8DirDash",
    status: false,
    description:
      "グラフィック変更を伴う8方向移動機能が追加されるプラグインです。",
    parameters: {},
  },
  {
    name: "MKR_BtlCustom_1",
    status: true,
    description: "(v1.0.1) バトル画面レイアウトプラグイン その1",
    parameters: {
      Screen_Width: "0",
      Screen_Height: "0",
      Window_Left_Margin: "0",
      Battler_Position: "OFF",
      Fit_Titleback: "OFF",
      Fit_Battleback: "OFF",
      Fit_Gameoverback: "OFF",
    },
  },
  {
    name: "TYA_EnemyHPGauge",
    status: true,
    description:
      "敵ターゲットウィンドウにＨＰゲージを表示させます。\r\n特定の敵のゲージを非表示にすることもできます。",
    parameters: {},
  },
  {
    name: "SSEP_BattleSpeedUp_v2",
    status: true,
    description:
      "[ver2.01] 戦闘速度を上げるプラグインです。YanflyEngine対応。\n利用時は、必ずYanflyEngineの後に読み込んでください。",
    parameters: {
      "---General Setting---": "",
      "BattleSpeed (Default)": "1",
      "BattleSpeed (Boost)": "4",
      OkayKeyBoost: "true",
      VisibleSwitch: "true",
      BoostToggleSwitch: "shift",
      "---Detail Setting---": "",
      StateIcon: "40",
      StateOverlay: "8",
      Weapon: "12",
      Motion: "12",
      Balloon: "12",
      Damage: "90",
      DamageMin: "60",
      "--BattleLog Setting--": "",
      "LogAnime BaseDelay": "8",
      "LogAnime NextDelay": "12",
      "LogWaitCount Default": "1",
      "LogWaitCount Boost": "2",
      "---Switch Setting---": "",
      "SE BoostON": "Decision2",
      "SE BoostOFF": "Decision2",
      "SE Volume": "50",
      SwitchImage: "Balloon",
      SwitchX: "10",
      SwitchY: "10",
      SwitchWidth: "48",
      SwitchHeight: "48",
      SwitchTop: "2",
      SwitchLeft: "1",
      SwitchAnimePattern: "8",
      SwitchAnimeSpeed: "5",
      "---YEP BattleCore---": "",
      "YEP Battle MotionWait": "20",
      "---YEP ATB---": "",
      "YEP ATB BoostSwitch": "true",
      "---ATB Speed---": "",
      "ATB Speed(Default)": "1",
      "ATB Speed(Boost)": "2",
      "---YEP Victory AM---": "",
      "YEP Victory Wait": "true",
    },
  },
  {
    name: "UTA_MessageSkip",
    status: true,
    description: "特定キーを押す事でメッセージをスキップできるようにします。",
    parameters: { "Skip Key": "control", "Show Trace": "false" },
  },
  {
    name: "UTA_CommonSave",
    status: true,
    description:
      "共有のセーブデータを作成し、指定したスイッチ・変数の状態をセーブデータ間で共有します。",
    parameters: {
      "Target Switches": "701-820,821-838,861",
      "Target Variables": "",
      "Is Auto": "true",
      "Auto on Gameover": "false",
      "Show Trace": "false",
    },
  },
  {
    name: "AltSaveScreen",
    status: true,
    description: "セーブ／ロード画面のレイアウトを変更します。",
    parameters: {},
  },
  {
    name: "Lunatlazur_ActorNameWindow",
    status: true,
    description: "名前ウィンドウ表示プラグイン",
    parameters: { テキストカラー: "1" },
  },
  {
    name: "ChangeWeaponOnBattle",
    status: true,
    description: "戦闘コマンドに装備変更を追加",
    parameters: { commandName: "Equipment" },
  },
  {
    name: "HPConsumeSkill",
    status: true,
    description: "HP消費技",
    parameters: {},
  },
  {
    name: "Foreground",
    status: true,
    description: "マップに合わせてスクロールする近景の設定(Ver1.0.1)",
    parameters: {},
  },
  {
    name: "KNH_CharacterShadow",
    status: false,
    description: "キャラクターに影をつけるプラグイン",
    parameters: { 影画像: "Shadow1" },
  },
  {
    name: "AudioStreaming",
    status: true,
    description: "音声読み込みを高速化し、oggファイルのみを使用します。",
    parameters: { mode: "10", deleteM4a: "false" },
  },
  {
    name: "TMGreedShop",
    status: true,
    description: "お金以外にアイテムも要求されるショップ機能を追加します。",
    parameters: {
      materialWindowPosition: "0",
      materialWindowWidth: "408",
      buyWindowWidth: "456",
      buyWindowHeight: "0",
      materialMax: "5",
      fontRate: "0.8",
      greedCommand: "購入する",
      needText: "購入条件",
      showSellCommand: "true",
      showMaterialWindow: "true",
      overlaid: "true",
      backOpacity: "192",
      showMaterialFromNumberWindow: "true",
      showPrice: "true",
      seGreedBuy: '{"name":"Shop1","volume":"90","pitch":"100","pan":"0"}',
    },
  },
  {
    name: "BeforeCommon",
    status: true,
    description:
      "ver1.01/スキルやアイテムの発動前に、スキルやアイテムに設定されたコモンイベントを発生させます。",
    parameters: { IndexVariableID: "11", TargetIndexVariableID: "12" },
  },
  {
    name: "SkillCPSystem",
    status: true,
    description: "ver1.10/スキルを装備して使用するシステムを追加します。",
    parameters: {
      "Default Skill CP": "0",
      "Default Skill Set": "3",
      "Default CP": "5",
      "CP Name": "CP",
      "Set Name": "Set",
      "LvUp CP Rate": "0.3",
      "LvUp Set Rate": "0.05",
      "No Equip Slot Name": "---------------------------",
      "Set Point Gauge Color1": "22",
      "Set Point Gauge Color2": "23",
      "CP Gauge Color1": "28",
      "CP Gauge Color2": "29",
      "Add Menu Skill Setting": "true",
      "Menu Skill Setting Title": "Equipped Skills",
      "Show Unsettable Skill": "true",
      "Unsetting Skill Color": "4",
      "No Cost Class Learn Skills": "false",
      "Simple Mode": "false",
      "Slot Size": "5",
    },
  },
  {
    name: "PermanentState",
    status: true,
    description:
      "ver1.00/戦闘不能や全回復で解除されないステートを設定できるようにします。",
    parameters: {},
  },
  {
    name: "MPP_EncounterEffect",
    status: true,
    description: "エンカウント時の演出を特殊なエフェクトに変更します。",
    parameters: { "Effect Type": "3", "Effect Color": "255,255,255" },
  },
  {
    name: "MPP_EncounterEffect_Op1",
    status: true,
    description: "MPP_EncounterEffect.js の細かなパラメータを設定できます。",
    parameters: {
      "Type 1 Params": "",
      "Type 2 Params": "",
      "Type 3 Params":
        '{"Shape Type":"triangle","Break Direction":"inside","Break Duration":"15","Interval Duration":"15","Scatter Duration":"4","Move Duration":"30","Split X":"6","X Random Rate":"80","Split Y":"3","Y Random Rate":"80"}',
      "Line Width": "4",
      "Flash Opacity": "255",
      "Break Rate": "100",
      "Slide Rate": "100",
      "Rotation Rate": "100",
    },
  },
  {
    name: "NeedAutorunFade",
    status: false,
    description: "ver1.01 移動先の自動実行でフェードアウトママ",
    parameters: {},
  },
  {
    name: "CommonPopupCore",
    status: true,
    description:
      "ver1.05/汎用的なポップアップの仕組みを提供するためのベースプラグインです。",
    parameters: {
      "Text Back Color": "rgba(0,0,0,0.6)",
      "Text Back FileName": "popup_back%d",
    },
  },
  {
    name: "GetInformation",
    status: true,
    description:
      "ver1.14/アイテムの入手などにスライドアニメするインフォメーションを追加するプラグインです。",
    parameters: {
      "Info Disable Switch Id": "1000",
      "Use Battle Info": "true",
      "Use Rewards Info": "true",
      "Info Pattern": "GrowUp",
      "Info Font Size": "20",
      "Info Count": "120",
      "Info Delay": "20",
      "Info MoveWait": "100",
      "Info MoveFade": "10",
      "Info Position": "",
      "Info Slide Action": "",
      "Info Sup X": "0",
      "Info Sup Y": "0",
      "Info Width": "816",
      "Gold Icon Index": "314",
      "Actor Icon Start Index": "320",
      "Reward Popup Delay": "0",
      "Battle Show List": "item,gold,exp,skill,params,level,abp,classLevel",
      "Get Gold Text":
        "「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[24]手に入れた！",
      "Lost Gold Text": "「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[2]失った。",
      "Get Item Text": "「_name」を\\C[24]入手。\\n\\C[6]_desc1",
      "Lost Item Text": "「\\I[_icon]_name」 を\\C[2]失った。\\n\\C[6]_desc1",
      "Get Item Text Num":
        "「\\I[_icon]_name」 を\\C[14]_num個\\C[24]手に入れた！\\n\\C[6]_desc1",
      "Lost Item Text Num":
        "「\\I[_icon]_name」を\\C[14]_num個\\C[2]失った。\\n\\C[6]_desc1",
      "Get Skill Text": "_actorは「_name」 を\\C[24]習得。\\n\\C[6]_desc1",
      "Lost Skill Text":
        "_actorは「\\I[_icon]_name」を \\C[2]喪失。\\n\\C[6]_desc1",
      "Exp Up Text":
        "_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！",
      "Exp Down Text":
        "_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・",
      "Lv Up Text":
        "_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！",
      "Lv Down Text":
        "_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・",
      "Param Up Text":
        "_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！",
      "Param Down Text":
        "_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・",
      "Abp Up Text":
        "_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！",
      "Abp Down Text":
        "_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・",
      "Class Lv Up Text":
        "_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！",
      "Class Lv Down Text":
        "_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・",
      "Formation Lv Up Text":
        "\\C[4]_nameの熟練度\\C[0]が\\C[14]_numポイント\\C[24]上がった！",
      "Formation Lv Max Text": "\\C[4]_name\\C[0]を\\C[14]マスターした！",
    },
  },
  {
    name: "dsPassiveSkill",
    status: true,
    description: "パッシブスキルを実装するプラグイン ver1.12.0",
    parameters: { "Show Battle": "true", "Show Battle Switch ID": "0" },
  },
  {
    name: "YEP_BattleEngineCore",
    status: false,
    description:
      "v1.33 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.",
    parameters: {
      "---General---": "",
      "Action Speed": "agi",
      "Default System": "dtb",
      "---Escape---": "",
      "Escape Ratio": "0.5 * $gameParty.agility() / $gameTroop.agility()",
      "Fail Escape Boost": "0.1",
      "---Animation---": "",
      "Animation Base Delay": "0",
      "Animation Next Delay": "0",
      "Certain Hit Animation": "120",
      "Physical Animation": "52",
      "Magical Animation": "51",
      "Enemy Attack Animation": "39",
      "Reflect Animation": "42",
      "Motion Waiting": "false",
      "---Frontview---": "",
      "Front Position X":
        "Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index",
      "Front Position Y": "Graphics.boxHeight - 180",
      "Front Actor Sprite": "false",
      "Front Sprite Priority": "1",
      "---Sideview---": "",
      "Home Position X": "screenWidth - 16 - (maxSize + 2) * 32 + index * 32",
      "Home Position Y":
        "screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32",
      "Side Sprite Priority": "1",
      "---Sprites---": "",
      "Default X Anchor": "0.5",
      "Default Y Anchor": "1.0",
      "Step Distance": "48",
      "Flinch Distance": "12",
      "Show Shadows": "true",
      "---Damage Popups---": "",
      "Popup Duration": "128",
      "Newest Popup Bottom": "true",
      "Popup Overlap Rate": "0.9",
      "Critical Popup": "255, 0, 0, 160",
      "Critical Duration": "60",
      "---Tick-Settings---": "",
      "Timed States": "false",
      "Timed Buffs": "false",
      "Turn Time": "100",
      "AI Self Turns": "true",
      "---Window Settings---": "",
      "Lower Windows": "true",
      "Window Rows": "4",
      "Command Window Rows": "4",
      "Command Alignment": "center",
      "Start Actor Command": "true",
      "Current Max": "false",
      "---Selection Help---": "",
      "Mouse Over": "true",
      "Select Help Window": "true",
      "User Help Text": "User",
      "Ally Help Text": "Ally",
      "Allies Help Text": "Allies",
      "Enemy Help Text": "Enemy",
      "Enemies Help Text": "Enemies",
      "All Help Text": "All %1",
      "Random Help Text": "%2 Random %1",
      "---Enemy Select---": "",
      "Visual Enemy Select": "true",
      "Show Enemy Name": "true",
      "Show Select Box": "false",
      "Enemy Font Size": "20",
      "Enemy Auto Select": "this.furthestRight()",
      "---Actor Select---": "",
      "Visual Actor Select": "true",
      "---Battle Log---": "",
      "Show Emerge Text": "false",
      "Show Pre-Emptive Text": "true",
      "Show Surprise Text": "true",
      "Optimize Speed": "true",
      "Show Action Text": "false",
      "Show State Text": "false",
      "Show Buff Text": "false",
      "Show Counter Text": "true",
      "Show Reflect Text": "true",
      "Show Substitute Text": "true",
      "Show Fail Text": "false",
      "Show Critical Text": "false",
      "Show Miss Text": "false",
      "Show Evasion Text": "false",
      "Show HP Text": "false",
      "Show MP Text": "false",
      "Show TP Text": "false",
    },
  },
  {
    name: "YEP_CoreEngine",
    status: false,
    description:
      "v1.13 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.",
    parameters: {
      "---Screen---": "",
      "Screen Width": "816",
      "Screen Height": "624",
      "Scale Battlebacks": "true",
      "Scale Title": "true",
      "Scale Game Over": "true",
      "Open Console": "false",
      "Reposition Battlers": "true",
      "---Gold---": "",
      "Gold Max": "99999999",
      "Gold Font Size": "20",
      "Gold Icon": "313",
      "Gold Overlap": "A lotta",
      "---Items---": "",
      "Default Max": "99",
      "Quantity Text Size": "20",
      "---Stats---": "",
      "Max Level": "99",
      "Actor MaxHP": "9999",
      "Actor MaxMP": "9999",
      "Actor Parameter": "999",
      "Enemy MaxHP": "999999",
      "Enemy MaxMP": "9999",
      "Enemy Parameter": "999",
      "---Battle---": "",
      "Animation Rate": "4",
      "Flash Target": "false",
      "---Font---": "",
      "Chinese Font": "SimHei, Heiti TC, sans-serif",
      "Korean Font": "Dotum, AppleGothic, sans-serif",
      "Default Font": "GameFont, Verdana, Arial, Courier New",
      "Font Size": "28",
      "Text Align": "left",
      "---Windows---": "",
      "Digit Grouping": "true",
      "Line Height": "36",
      "Icon Width": "32",
      "Icon Height": "32",
      "Face Width": "144",
      "Face Height": "144",
      "Window Padding": "18",
      "Text Padding": "6",
      "Window Opacity": "192",
      "Gauge Outline": "true",
      "Gauge Height": "18",
      "Menu TP Bar": "true",
      "---Window Colors---": "",
      "Color: Normal": "0",
      "Color: System": "16",
      "Color: Crisis": "17",
      "Color: Death": "18",
      "Color: Gauge Back": "19",
      "Color: HP Gauge 1": "20",
      "Color: HP Gauge 2": "21",
      "Color: MP Gauge 1": "22",
      "Color: MP Gauge 2": "23",
      "Color: MP Cost": "23",
      "Color: Power Up": "24",
      "Color: Power Down": "25",
      "Color: TP Gauge 1": "28",
      "Color: TP Gauge 2": "29",
      "Color: TP Cost Color": "29",
    },
  },
  {
    name: "MOG_CollapseEffects",
    status: true,
    description: "(v1.6 *) 消滅エフェクトのアニメーションを拡張します。",
    parameters: { "Default Collapse": "3", "Shatter Direction": "左" },
  },
  {
    name: "EnemyBreathing",
    status: true,
    description:
      "ver1.001/エネミーを上に伸ばしたり、横に伸ばしたり、反転させたりします。",
    parameters: {
      "Breath Frequency": "10",
      "Breath Rhythem": "0,0,1,2,3,4,5,5,4,3,2,1",
      ExpansionX: "0.005",
      "Enemy Size": "10",
    },
  },
  {
    name: "TranslucentMenuBack",
    status: true,
    description: "透けるメニュー背景を実装します。",
    parameters: {
      "Background Image": "menu",
      "Background Opacity": "224",
      "Background Blur": "true",
      "Dark Background on GameEnd": "true",
    },
  },
  {
    name: "SideEffectSkill",
    status: true,
    description: "スキルの副作用プラグイン",
    parameters: {},
  },
  {
    name: "TitleImageChange",
    status: true,
    description: "タイトル画面変更プラグイン",
    parameters: {
      進行度変数: "43",
      優先度変数: "0",
      タイトル1の進行度: "1",
      タイトル1の画像: "title",
      タイトル1のBGM: "彼女の強さ",
      タイトル2の進行度: "2",
      タイトル2の画像: "title2",
      タイトル2のBGM: "彼女の強さ",
      タイトル3の進行度: "3",
      タイトル3の画像: "",
      タイトル3のBGM: "",
      以降の進行度: "",
      以降の画像: "",
      以降のBGM: "",
    },
  },
  {
    name: "MapNameExtend",
    status: true,
    description: "マップ名表示拡張プラグイン",
    parameters: {
      X座標: "0",
      Y座標: "0",
      フェード中移動X: "1",
      フェード中移動Y: "0",
      総フレーム数: "300",
      フェードイン速度: "0",
      表示遅延: "0",
      横幅: "0",
      ウィンドウ表示: "false",
      背景画像: "",
      実名表示: "false",
      制御文字使用: "false",
      無効タイルセット: "",
    },
  },
  {
    name: "ponidog_BackLog_utf8",
    status: false,
    description: "バックログ及びメッセージ周りの補填関係",
    parameters: {
      nBackLogDisplayLine: "12",
      nBackLogLimitMax: "-1",
      nBackLogButtonUp: "0",
      nBackLogButtonDown: "0",
      nBackLogButtonHide: "0",
      bPoniBKlog_RClickHideON: "0",
      bBackLogNameOn_forYepMessageCore: "true",
      sBackLogTitle: "###LOG",
      sBackLogTitlePage: "Page##",
      sBackLogNameOn_Flame: "●",
      sBackLogNameOn_Flame2: "",
      sBackLogNoFaceSymbol: "★",
      sBackLogNoFaceSpace: "",
      bHideMessageCall_In_SwitchNum: "0",
      bHideMessageCall_Out_SwitchNum: "0",
      nAnimeOnSwitchNum: "0",
      nButton_1: "0",
      nButton_switch_1: "0",
      nButton_2: "0",
      nButton_switch_2: "0",
      nButton_3: "0",
      nButton_switch_3: "0",
      nButton_4: "0",
      nButton_switch_4: "0\r",
      nButton_5: "0",
      nButton_switch_5: "0",
      nButton_6: "0",
      nButton_switch_6: "0",
      nButton_7: "0",
      nButton_switch_7: "0",
      nButton_8: "0",
      nButton_switch_8: "0",
    },
  },
  {
    name: "MOG_TitlePictureCom",
    status: true,
    description: "(v1.6 *) タイトルメニューのコマンドを画像で表示します",
    parameters: {
      "-> Main <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Animation Mode": "0",
      "Left & Right Input": "true",
      "Com Fade-In Duration": "13",
      "Slide X-Axis": "0",
      "Slide Y-Axis": "0",
      "": "",
      "-> Smart Background  <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Smart Background": "false",
      "Background X-Axis": "0",
      "Background Y-Axis": "0",
      "Background Fade-In Duration": "90",
      "-> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Title Sprite": "false",
      "Title Sprite X-Axis": "0",
      "Title Sprite Y-Axis": "0",
      "Fade-In Duration": "40",
      "Zoom Effect": "true",
      "Zoom Speed": "40",
      "-> Cursor <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Cursor Visible": "true",
      "Cursor Wave Animation": "false",
      "Cursor Rotation Animation": "true",
      "Cursor Rotation Speed": "0.05",
      "Cursor X-Axis": "-10",
      "Cursor Y-Axis": "15",
      "-> Commands <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Command Pos 1": "600,400",
      "Command Pos 2": "600,430",
      "Command Pos 3": "600,460",
      "Command Pos 4": "670,550",
      "Command Pos 5": "345,498",
      "Command Pos 6": "345,530",
      "Command Pos 7": "0,192",
      "Command Pos 8": "0,224",
      "Command Pos 9": "0,256",
      "Command Pos 10": "0,288",
    },
  },
  {
    name: "RTK_EnemySight",
    status: true,
    description: "マップでイベントがプレイヤーを見かけるとスイッチをON",
    parameters: { "tag name": "sight", followers: "0", "sight through": "0" },
  },
  {
    name: "Oggy_SnowTitle",
    status: true,
    description: "タイトル画面に雪を降らせます。",
    parameters: { "Snow Power": "3" },
  },
  {
    name: "setItemMax",
    status: true,
    description: "アイテムの最大所持個数をアイテムIdごとに指定できます。",
    parameters: {},
  },
  {
    name: "KMS_MapActiveMessage",
    status: true,
    description:
      "[v0.2.0] プレイヤーが近付いたときに、自動的にメッセージを表示するイベントを作成します。",
    parameters: {
      "Balloon offset Y": "20",
      "Balloon margin": "-8",
      "Default range": "10",
      "Display duration": "300",
      "Max message count": "10",
      "Message skin": "ActiveMessageSkin",
    },
  },
  {
    name: "CharacterPopupDamage",
    status: true,
    description: "キャラクターのダメージポッププラグイン",
    parameters: {
      効果音演奏: "true",
      消音スイッチID: "0",
      X座標補正: "0",
      Y座標補正: "0",
      HP自動ポップアップ: "true",
      MP自動ポップアップ: "false",
      TP自動ポップアップ: "true",
      増加自動ポップアップ: "true",
      減少自動ポップアップ: "true",
      MPダメージ音: "",
      回転: "true",
      X方向半径: "50",
      Y方向半径: "50",
      回転速度: "50",
      拡大率: "50",
      拡大率変化値: "0",
      最前面表示: "true",
    },
  },
  {
    name: "TMMapHpGauge",
    status: true,
    description:
      "マップシーンに顔グラフィックとＨＰゲージを表示します。\r\n必要に応じてＭＰや変数などをゲージで表示することもできます。",
    parameters: {
      gaugeWindowX: "0",
      gaugeWindowY: "20",
      gaugeWindowWidth: "288",
      gaugeWindowHeight: "64",
      gaugeA:
        '{"type":"HP","x":"12","y":"12","width":"144","height":"36","fontSize":"28","param":"0","max":"0","name":"AP","color":"#ff60c0 #ffa0e0"}',
      gaugeB:
        '{"type":"","x":"12","y":"12","width":"144","height":"36","fontSize":"28","param":"0","max":"0","name":"AP","color":"#ff60c0 #ffa0e0"}',
      gaugeC:
        '{"type":"","x":"12","y":"12","width":"144","height":"36","fontSize":"28","param":"0","max":"0","name":"AP","color":"#ff60c0 #ffa0e0"}',
      gaugeD:
        '{"type":"","x":"12","y":"12","width":"144","height":"36","fontSize":"28","param":"0","max":"0","name":"AP","color":"#ff60c0 #ffa0e0"}',
      faceOffsetX: "-4",
      faceOffsetY: "-4",
      stateIconMax: "4",
      stateIconX: "156",
      stateIconY: "24",
      stateIconScale: "100",
      stateIconOpacity: "255",
      goldWidth: "0",
      goldX: "12",
      goldY: "12",
      vnMax: "false",
      shakeTime: "20",
      startVisible: "false",
      windowOpacity: "255",
      collideOpacity: "128",
      messageBusyHide: "true",
      eventBusyHide: "true",
      useBattleScene: "false",
      gaugeWindowBattleX: "0",
      gaugeWindowBattleY: "0",
    },
  },
  {
    name: "Chronus",
    status: false,
    description: "ゲーム内時間の導入プラグイン",
    parameters: {
      月ごとの日数配列: "31,28,31,30,31,30,31,31,30,31,30,31",
      月名配列: "Jan.,Feb.,Mar.,Apr.,May.,Jun.,Jul.,Aug.,Sep.,Oct.,Nov.,Dec.",
      曜日配列: "(日),(月),(火),(水),(木),(金),(土)",
      自然時間加算: "0",
      自然時間加算間隔: "0",
      場所移動時間加算: "15",
      "戦闘時間加算(固定)": "30",
      "戦闘時間加算(ターン)": "0",
      年のゲーム変数: "0",
      月のゲーム変数: "0",
      日のゲーム変数: "0",
      曜日IDのゲーム変数: "0",
      曜日名のゲーム変数: "0",
      時のゲーム変数: "0",
      分のゲーム変数: "0",
      累計時間のゲーム変数: "0",
      累計日数のゲーム変数: "0",
      時間帯IDのゲーム変数: "0",
      天候IDのゲーム変数: "0",
      フォーマット時間の変数: "0",
      フォーマット時間の計算式: "HH24 * 60 + MI",
      日時フォーマット1: "",
      日時フォーマット2: "AMHH時 MI分",
      日時フォーマット行間: "0",
      カレンダー表示X座標: "0",
      カレンダー表示Y座標: "0",
      カレンダーフォントサイズ: "0",
      カレンダー不透明度: "192",
      カレンダー枠の非表示: "false",
      カレンダーの非表示: "false",
      カレンダー余白: "8",
      文字盤画像ファイル: "",
      長針画像ファイル: "",
      短針画像ファイル: "",
      "24hourClock": "false",
      時計X座標: "84",
      時計Y座標: "156",
      イベント中時間経過: "false",
    },
  },
  {
    name: "DebugMonitor",
    status: true,
    description: "スイッチ・変数の状態を画面上にリアルタイム表示します。",
    parameters: { monitorX: "0", monitorY: "0", monitorW: "240" },
  },
  {
    name: "TMMenuLabel",
    status: true,
    description:
      "メニューシーンに変数の値を表示します。\r\n歩数や戦闘回数などを表示することもできます。",
    parameters: {
      labelAName: "Segi's Inferiority",
      labelAId: "17",
      labelAMax: "100",
      labelAFooter: "",
      labelBName: "ラベルＢ",
      labelBId: "0",
      labelBMax: "9999",
      labelBFooter: "",
      labelCName: "ラベルＣ",
      labelCId: "0",
      labelCMax: "9999",
      labelCFooter: "",
      labelDName: "ラベルＤ",
      labelDId: "0",
      labelDMax: "9999",
      labelDFooter: "",
      labelNameWidth: "128",
      labelValueWidth: "72",
      labelNameColorId: "16",
      labelValueColorId: "0",
      labelMaxColorId: "2",
      labelFooterColorId: "0",
      footerSpace: "0",
      reverseMenuWindow: "0",
      menuTextAlign: "left",
    },
  },
  {
    name: "MenuCommonEvent",
    status: false,
    description: "メニュー内コモンイベントプラグイン",
    parameters: {
      コモンイベント情報: "",
      ピクチャ表示最大数: "10",
      実行位置を記憶: "false",
      タイマー有効化: "false",
      画像をウィンドウ背後に配置: "false",
      コマンド接頭辞: "",
    },
  },
  {
    name: "TriggerOnEquipAndState",
    status: true,
    description: "装備変更時の変数操作プラグイン",
    parameters: {
      BattleMemberOnly: "false",
      SlotVariables: '["0","0","0","0","0"]',
    },
  },
  {
    name: "MessageWindowHidden",
    status: true,
    description: "メッセージウィンドウ一時消去プラグイン",
    parameters: {
      triggerButton: '["右クリック","shift"]',
      triggerSwitch: "0",
      linkPictureNumbers: "[]",
      linkShowPictureNumbers: "[]",
      disableLinkSwitchId: "0",
      disableSwitchId: "0",
      disableInBattle: "false",
      disableInChoice: "true",
    },
  },
  {
    name: "TMAnimeLight",
    status: true,
    description: "イベントにアニメーション付きの明かりを表示します。",
    parameters: { range: "0.1", defaultZ: "4", frames: "90" },
  },
  {
    name: "DisableFastForward",
    status: true,
    description: "イベント高速化禁止プラグイン",
    parameters: {},
  },
  {
    name: "DarkPlasma_FixEquip",
    status: true,
    description: "装備固定モードを実現する",
    parameters: {
      fixEquips:
        '["{\\"switchId\\":\\"998\\",\\"equipTypes\\":\\"[\\\\\\"4\\\\\\"]\\"}"]',
    },
  },
  {
    name: "MOG_Weather_EX",
    status: true,
    description: "(v3.3) 新しい天候効果を追加します。",
    parameters: { "Battle Weather": "true" },
  },
  {
    name: "OriginMenuStatus",
    status: true,
    description:
      "メニュー画面にステータスコマンドを追加します。追加されたコマンドをクリックすると設定した名前と名前に紐づく値の一覧を表示します",
    parameters: {
      command_name: "Segi's Story",
      param_name_1: "■Inferiority:,0,％",
      param_name_2: "■Mind:,0",
      param_name_3: "■Body:,0",
      param_name_4: "■Soul Mate:,0",
      param_name_5: "■First Partner:,0",
      param_name_6: "",
      param_name_7: "",
      param_name_8: "",
      param_name_9: "",
      param_name_10: "",
      paramName_pos_x: "100",
      paramName_align: "left",
      parameter_pos_x: "",
      param_pos_y: "50",
      line_interval: "50",
      image_x: "0",
      image_y: "0",
    },
  },
  {
    name: "111_PartyCommandSkip",
    status: false,
    description: "戦闘の戦う・逃げるを飛ばして戦闘へ",
    parameters: { SwitchNumber: "990" },
  },
  {
    name: "MapNameinSaveData",
    status: false,
    description: "セーブデータ上に現在マップ名を載せるプラグイン",
    parameters: {},
  },
  {
    name: "LL_VariableWindowMV",
    status: false,
    description: "変数を画面にウィンドウで表示します。",
    parameters: {},
  },
  {
    name: "EventInformation",
    status: false,
    description: "v1.1.1 イベントの頭上に文字を表示したい時に使います",
    parameters: {},
  },
  {
    name: "DestinationWindow",
    status: true,
    description: "行動目標ウィンドウプラグイン",
    parameters: {
      表示スイッチID: "990",
      イベント中は閉じる: "true",
      ウィンドウX座標: "490",
      ウィンドウY座標: "560",
      ウィンドウ横幅: "320",
      ウィンドウ不透明度: "200",
      ウィンドウスキン名: "",
      フェード時間: "8",
      フォントサイズ: "20",
      メニュー画面に表示: "true",
      自働調整: "true",
      表示フレーム数: "0",
      文字列揃え: "0",
      NoDestinationWindowMapIds: "[]",
    },
  },
  {
    name: "ConfusionExtend",
    status: false,
    description: "混乱ステート拡張プラグイン",
    parameters: { 味方対象スキルの対象: "false" },
  },
  {
    name: "ConfusionTargetEx",
    status: false,
    description: "混乱等のステート時に自分をターゲットに含めない",
    parameters: { SwitchId: "1", BehaviorOfRecoverAll: "0" },
  },
  {
    name: "MessageSpeedCustomize",
    status: true,
    description: "メッセージ速度調整プラグイン",
    parameters: { 表示速度変数: "46", 瞬間表示スイッチ: "0" },
  },
  {
    name: "LN_FilmicFilter",
    status: false,
    description: "LN_FilmicFilter v1.1.0 (MIT License)",
    parameters: { EditorKey: "true" },
  },
  {
    name: "MapFilterManager",
    status: true,
    description:
      '</span> マップのFilterを管理する。セーブ/ロード対応。</span></td>\n</tr>\n<tr>\n<td id="L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td>\n<td id="LC5" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>',
    parameters: {},
  },
  {
    name: "BloomFilter",
    status: true,
    description:
      '</span> 光が漏れるような効果があります。</span></td>\n</tr>\n<tr>\n<td id="L13" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="13"></td>\n<td id="LC13" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>',
    parameters: {},
  },
  {
    name: "FilterExample",
    status: true,
    description:
      '</span> BloomFilter,TiltShiftFilter,GrayScale,Sepiaをプラグインコマンドから利用できます。</span></td>\n</tr>\n<tr>\n<td id="L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td>\n<td id="LC5" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>',
    parameters: {},
  },
  {
    name: "ConditionalState",
    status: true,
    description: "条件付きステート付与プラグイン",
    parameters: {},
  },
  {
    name: "MNKR_SwitchSell",
    status: true,
    description: "指定スイッチがONの時、売却できないアイテムを作ります。",
    parameters: { switchId: "0" },
  },
  {
    name: "SupponShopStock",
    status: true,
    description: "在庫システムを有するお店を設定します。version 1.04",
    parameters: {
      "Label of stock Number": "在庫数",
      "Label of sold out": "売り切れ",
    },
  },
  {
    name: "店員ショップ",
    status: false,
    description: "ショップ画面のレイアウトを変更します。",
    parameters: {
      UseBackPicture: "true",
      BackPicture: "Shop_Back_Picture",
      MessagePicture: "Shop_Message_Picture",
      ClerkPicture: "Shop_Clerk_",
      ClerkVariables: "10",
      MessageVariables: "11",
      MessageFontSize: "24",
      MessageStartX: "0",
      MessageStartY: "0",
      Word1: "変化なし",
      Word2: "装備不可",
      MessageTexts:
        "いらっしゃいませ|どれにしますか？,\\c[17]いらっしゃいませ|\\c[24]どれにしますか？",
    },
  },
  {
    name: "セーブ画面",
    status: false,
    description:
      "セーブ/ロード画面のレイアウトを変更します。\r\n導入前にヘルプを読むことを推奨",
    parameters: {
      UseBackPicture1: "true",
      BackPicture1: "Save_Back_Picture",
      UseBackPicture2: "true",
      BackPicture2: "Save_Back_Picture2",
      Opacity: "192",
      DrawGauge: "true",
      MoveLvDraw: "false",
      FontSize1: "24",
      FontSize2: "28",
      Color1: "rgba(0,0,0,0.2)",
      Color2: "rgba(0,0,0,1)",
      Color3: "rgba(0,0,64,0.5)",
      Color4: "rgba(0,0,64,0.5)",
      Color5: "#00FF00",
    },
  },
  {
    name: "FloatingCharacter",
    status: true,
    description: "キャラクターの浮遊プラグイン",
    parameters: {
      通行可能地形タグ: "",
      通行可能リージョン: "",
      高度通行地形タグ: "",
      高度通行リージョン: "",
      高度閾値: "48",
      フォロワー連動: "true",
    },
  },
  {
    name: "AutomaticState",
    status: true,
    description: "ステート自動付与プラグイン",
    parameters: {},
  },
];
