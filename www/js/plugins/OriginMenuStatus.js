//=============================================================================
// OriginMenuStatus.js
//=============================================================================
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2019/08/06 ベータ版作成
// ----------------------------------------------------------------------------
//=============================================================================
/*:
 * @plugindesc メニュー画面にステータスコマンドを追加します。追加されたコマンドをクリックすると設定した名前と名前に紐づく値の一覧を表示します
 * @author kanatsuki (http://isyukan.com/)
 * 
 * @param command_name
 * @desc メニューに表示するコマンド名を設定します。
 * @default 特殊ステータス
 * 
 * @param param_name_1
 * @desc 設定するパラメーター名1 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default
 * 
 * @param param_name_2
 * @desc 設定するパラメーター名2 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default 
 * 
 * @param param_name_3
 * @desc 設定するパラメーター名3 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default 
 * 
 * @param param_name_4
 * @desc 設定するパラメーター名4 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default 
 * 
 * @param param_name_5
 * @desc 設定するパラメーター名5 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default 
 * 
 * @param param_name_6
 * @desc 設定するパラメーター名6 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default 
 * 
 * @param param_name_7
 * @desc 設定するパラメーター名7 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default 
 * 
 * @param param_name_8
 * @desc 設定するパラメーター名8 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default 
 * 
 * @param param_name_9
 * @desc 設定するパラメーター名9 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default 
 * 
 * @param param_name_10
 * @desc 設定するパラメーター名10 カンマ（,)区切りで指定します。設定方法はヘルプを参照してください。
 * @default 
 * 
 * @param paramName_pos_x
 * @desc パラメーター名の位置を設定します。設定しない場合は画面横幅の半分の位置を全項目に設定します。
 * 
 * @param paramName_align
 * @desc パラメーター名を左揃え、真ん中整列、右揃えのいずれかに設定します。left,center,rightのいずれかの値を設定してください
 * @default left
*  
 * @param parameter_pos_x
 *  @desc パラメーター値の位置を設定します。設定しない場合は一番長いパラメーター名 + 20の値を全項目に設定します。
 * 
 * @param param_pos_y
 * @desc パラメーター名の位置を設定します。設定しない場合は50で自動設定します。
 * @default 50
 * 
 * 
 * @param line_interval
 * @desc パラメーターの縦軸の間隔幅（param1とparam2の間）を設定します。設定しない場合は50で自動設定します。
 * @default 50
 * 
 * @param image_x
 * @desc 画像位置を設定します。設定しない場合は10で自動設定します。
 * @default 10
 * 
 * @param image_y
 * @desc 画像位置を設定します。設定しない場合は10で自動設定します。
 * @default 10
 * 
 * @help param_name_〇の設定は下記の形で行います
 * 「パラメーター名,パラメーター初期値,パラメーター値の後に続く名前（回や％など）,文字列無視のフラグ(必要な場合はtrueと書いてください)」
 * 必須はパラメーター名のみです。残りは必要なもののみ入力してください。
 * 
 * 
 * 例1：
 * 経験値:,0,回
 * 例2:
 * 経験:,,%
 * 例3:
 * 初回の相手のコメント:
 *
 * 最後の文字列無視のフラグは、他のパラメーター値と比べて長い文章を入力するときのみ指定してください。
 * 
 * またこのプラグインはイベントコマンドのプラグインコマンドから下記の方法でパラメーター値の設定、画像の設定が行えます。
 * 
 * SetParamVariable
 * 　指定した変数の値を設定します。代入のため初期値はありません。
 * 　2回目を呼び出した場合は1回目に設定した値を上書きます。
 * 　コマンドはプラグインコマンドに「OriginMenuStatus SetParamVariable param〇 △」を入力することで呼び出しが行えます。
 * 　〇の部分には「param_name_1」などの最後尾についている1～10の値を設定します。
 * 　変数番号を指定してください。
 * 
 * 　例1：変数1の値をパラメーター1に設定したい場合
 * 　　「OriginMenuStatus SetParamVariable param1 1」
 * 　例2：変数2のパラメーター5に設定したい場合
 * 　　「OriginMenuStatus SetParamVariable param5 2」
 *
 * SetParam
 * 　設定された値を設定します。代入のため初期値はありません。
 * 　2回目を呼び出した場合は1回目に設定した値を上書きます。
 * 　コマンドはプラグインコマンドに「OriginMenuStatus SetParam param〇 △」を入力することで呼び出しが行えます。
 * 　〇の部分には「param_name_1」の最後尾についている1～10の値を設定します。
 * 　△は好きな値を設定してください。
 * 
 * 　例1：パラメーター1に「相手」を設定したい場合
 * 　　「OriginMenuStatus SetParam param1 相手」
 * 
 * SetPicture
 * 　ファイル名を設定します。代入のため初期値はありません。2回目を呼び出した場合は1回目に設定した値を上書きます。
 * 　コマンドはプラグインコマンドに「OriginMenuStatus SetPicture △」を入力することで呼び出しが行えます。
 * 　△はファイル名を設定してください。
 *
 *  　例1：のパラメーターに「立ち絵01c_笑.png」を設定したい場合。
 * 　　「OriginMenuStatus SetPicture 立ち絵01c_笑」 
 *  　
 * 　※あらかじめ「プロジェクト名/img/pictures」フォルダに「立ち絵01c_笑.png」を格納しておく必要があります。
 *   ※例ではファイル名を日本語で記載しましたが、
 * 　　日本語文字はプログラム上問題が発生する可能性があるため（ツクール以外のプログラム含め共通の仕様になります）ファイル名は英数字での管理を推奨します。


 ・メニュー画面に、下記の項目を追加します。
 ・メニューコマンド
 ・エッチステータス画面

 作者: kanatsuki (
 作成日: 2019/8/03
*/

// 自作オブジェクトのコンストラクタ
// 即時関数の外に出しておかないとデータをロードした時に
// prototypeがundefinedになるので注意
function OriginMenuStatusSaveObj() {
  this.initialize.apply(this, arguments);
}

// 以下から即時関数
(function () {
  "use strict";

  //-----------------------------------------------------------------------------
  // 初期化処理

  const pluginName = "OriginMenuStatus";
  // メニュー画面コマンドと選択した後の処理をつなぐ際のバインド名
  const command_bind_name = "origin_menu_status";

  // 設定値の固有名
  const PARAM_LIST = {
    param1: "param_name_1",
    param2: "param_name_2",
    param3: "param_name_3",
    param4: "param_name_4",
    param5: "param_name_5",
    param6: "param_name_6",
    param7: "param_name_7",
    param8: "param_name_8",
    param9: "param_name_9",
    param10: "param_name_10",
  };

  // 設定パラメーター取得
  let parameters = PluginManager.parameters(pluginName);
  // パラメータからデータを取得
  const command_name = String(parameters["command_name"] || "特殊ステータス");

  // -------------------------------------------------------------------------------------
  // データ設定

  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === pluginName) {
      switch (args[0]) {
        case "AddParam":
          $gameSystem.OriginMenuStatusSaveObj().AddParam(args[1], args[2]);
          break;
        case "SubParam":
          $gameSystem.OriginMenuStatusSaveObj().SubParam(args[1], args[2]);
          break;
        case "SetParam":
          $gameSystem.OriginMenuStatusSaveObj().SetParam(args[1], args[2].replace(/_/g, ' '));
          break;
        case "SetParamVariable":
          $gameSystem
            .OriginMenuStatusSaveObj()
            .SetParamVariable(args[1], args[2]);
          break;
        case "GetParam":
          return $gameSystem.OriginMenuStatusSaveObj().GetParam(args[1]);
        case "SetPicture":
          $gameSystem.OriginMenuStatusSaveObj().SetPicture(args[1]);
          break;
        case "GetPicture":
          return $gameSystem.OriginMenuStatusSaveObj().GetPicture();
      }
    }
  };

  // Game_System
  // プラグインのデータを保存するために
  // Game_Systemにオブジェクトを追加しておく
  // ---------- Game_System ここから ----------
  var _Game_System_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function () {
    _Game_System_initialize.call(this);
    this._OriginMenuStatusSaveObj = new OriginMenuStatusSaveObj();
  };

  Game_System.prototype.OriginMenuStatusSaveObj = function () {
    return this._OriginMenuStatusSaveObj;
  };
  // ---------- Game_System ここまで ----------

  // 自作クラス(オブジェクト)
  OriginMenuStatusSaveObj.prototype = Object.create(
    OriginMenuStatusSaveObj.prototype
  );
  OriginMenuStatusSaveObj.prototype.costructor = OriginMenuStatusSaveObj;

  OriginMenuStatusSaveObj.prototype.initialize = function () {
    this.originParamValue = {};
    this.fileName = "";
  };

  OriginMenuStatusSaveObj.prototype.AddParam = function (key, value) {
    const nowValue = this.GetParam(key) === undefined ? 0 : this.GetParam(key);
    this.originParamValue[PARAM_LIST[key]] = nowValue + parseInt(value);
  };

  OriginMenuStatusSaveObj.prototype.SubParam = function (key, value) {
    const nowValue = this.GetParam(key) === undefined ? 0 : this.GetParam(key);
    this.originParamValue[PARAM_LIST[key]] = nowValue - parseInt(value);
  };

  OriginMenuStatusSaveObj.prototype.SetParam = function (key, value) {
    this.originParamValue[PARAM_LIST[key]] = value;
  };

  OriginMenuStatusSaveObj.prototype.SetParamVariable = function (key, value) {
    this.originParamValue[PARAM_LIST[key]] = $gameVariables.value(value);
  };

  OriginMenuStatusSaveObj.prototype.GetParam = function (key) {
    return this.originParamValue[PARAM_LIST[key]];
  };

  OriginMenuStatusSaveObj.prototype.SetPicture = function (fileName) {
    this.fileName = fileName;
  };

  OriginMenuStatusSaveObj.prototype.GetPicture = function () {
    return this.fileName;
  };

  //-----------------------------------------------------------------------------
  // コマンド処理

  // プラグインコマンドの定義
  const _Window_MenuCommand_addOriginalCommands =
    Window_MenuCommand.prototype.addOriginalCommands;
  Window_MenuCommand.prototype.addOriginalCommands = function () {
    _Window_MenuCommand_addOriginalCommands.call(this);
    let enabled = this.areMainCommandsEnabled();
    this.addCommand(command_name, command_bind_name, enabled);
  };

  // コマンド選択時の処理
  const _Scene_Menu_prototype_createCommandWindow =
    Scene_Menu.prototype.createCommandWindow;
  Scene_Menu.prototype.createCommandWindow = function () {
    _Scene_Menu_prototype_createCommandWindow.call(this);

    this._commandWindow.setHandler(command_bind_name, () => {
      // メニューが選択されたらステータス画面を呼び出す
      SceneManager.push(OriginMenuStatus);
    });
  };

  //-----------------------------------------------------------------------------
  // 呼び出されるメニュー画面

  function OriginMenuStatus() {
    this.initialize.apply(this, arguments);
  }
  OriginMenuStatus.prototype = Object.create(Scene_MenuBase.prototype);
  OriginMenuStatus.prototype.constructor = OriginMenuStatus;

  OriginMenuStatus.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
  };

  // 画面構築
  OriginMenuStatus.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);

    // ベースのWindowを作成
    this._baseWindow = new BaseWindow();
    this.addWindow(this._baseWindow);
    this._baseWindow.setHandler("cancel", this.popScene.bind(this));

    // 画像描画
    if (!this.drawImage()) return;

    this._originSysMessage = [];
    this._originParamMessage = [];

    let drawList = [];
    let paramNameMaxLength = 1,
      paramValueMaxLength = 1;
    Object.keys(PARAM_LIST).forEach(function (key) {
      let val = PARAM_LIST[key];
      let parameterName = String(parameters[val] || "");

      // なければ次の値へ
      if (!parameterName) return true;

      let splitdata = parameterName.split(",");
      let drawData = {};
      drawData.name = splitdata[0];
      drawData.value = splitdata.length > 1 ? splitdata[1] : "";
      let saveValue = $gameSystem.OriginMenuStatusSaveObj().GetParam(key) || "";
      if (saveValue) drawData.value = saveValue;

      drawData.after_name = splitdata.length > 2 ? splitdata[2] : "";

      if (splitdata.length > 3) {
        try {
          drawData.is_ignorelength = Boolean(splitdata[3]);
        } catch (error) {
          drawData.is_ignorelength = false;
        }
      } else {
        drawData.is_ignorelength = false;
      }

      // 一番長い文字列を格納しておく
      if (
        drawData.name !== undefined &&
        paramNameMaxLength < drawData.name.length
      )
        paramNameMaxLength = drawData.name.length;

      // パラメーター値は長いもの対策としてis_ignorelengthがたってたらその部分を処理しないように対策
      if (drawData.value !== undefined && drawData.is_ignorelength === false) {
        if (paramValueMaxLength < String(drawData.value).length)
          paramValueMaxLength = String(drawData.value).length;
      }
      drawList.push(drawData);
    });

    // パラメーター位置を取得して描画する
    const line_interval = parseInt(parameters["line_interval"] || 50);
    const paramName_pos_x = parseInt(
      parameters["paramName_pos_x"] || Graphics.width / 2
    );
    const parameter_pos_x = parseInt(
      parameters["parameter_pos_x"] ||
        paramName_pos_x +
          this._baseWindow.GetFontSize() * paramNameMaxLength +
          20
    );
    const param_pos_y = parseInt(parameters["param_pos_y"] || 50);
    const paremterNameAlign = parameters["paramName_align"] || "left";

    let cnt = 0;
    drawList.forEach(function (data) {
      let tmp;
      // パラメーター名
      tmp = this._baseWindow.DrawParameterName(
        data.name,
        paramName_pos_x,
        param_pos_y + cnt * line_interval,
        paramNameMaxLength,
        paremterNameAlign
      );
      this._originSysMessage.push(tmp);

      // パラメーター値
      length =
        data.is_ignorelength !== false
          ? String(data.value).length
          : paramValueMaxLength;
      tmp = this._baseWindow.DrawParameterValue(
        data.value,
        parameter_pos_x,
        param_pos_y + cnt * line_interval,
        length,
        data.after_name
      );
      this._originParamMessage.push(tmp);
      cnt++;
    }, this);

    // 画面に表示するためメッセージを追加
    this._originSysMessage.forEach(function (windowItem) {
      this.addWindow(windowItem);
    }, this);
    // 画面に表示するためメッセージを追加
    this._originParamMessage.forEach(function (windowItem) {
      this.addWindow(windowItem);
    }, this);
  };

  // イメージを追加
  OriginMenuStatus.prototype.drawImage = function () {
    // 描画処理
    try {
      let pictname = $gameSystem.OriginMenuStatusSaveObj().GetPicture();

      if (pictname) {
        // throw 'エラー:' + pictname + 'のファイルが見つかりませんでした。'
        var bitmap = ImageManager.loadPicture(pictname);
        var sprite = new Sprite(bitmap);
        sprite.x = parseInt(parameters["image_x"] || 10);
        sprite.y = parseInt(parameters["image_y"] || 10);
        this.addWindow(sprite);
      }
    } catch (error) {
      return false;
    }
    return true;
  };

  //-----------------------------------------------------------------------------
  /**
   * BaseWindow
   * 一番下に表示するウィンドウ。
   * @constructor
   */
  function BaseWindow() {
    this.initialize.apply(this, arguments);
  }
  BaseWindow.prototype = Object.create(Window_Selectable.prototype);
  BaseWindow.prototype.constructor = BaseWindow;

  BaseWindow.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(
      this,
      0,
      0,
      Graphics.boxWidth,
      Graphics.boxHeight
    );
    this._actor = null;
    this.contents.paintOpacity = 0;
    this.refresh();
    this.activate();
  };

  BaseWindow.prototype.GetFontSize = function () {
    return this.standardFontSize();
  };

  // パラメーター名描画。
  BaseWindow.prototype.DrawParameterName = function (
    message,
    x,
    y,
    length,
    align
  ) {
    let bitmap = new Bitmap(Graphics.width, Graphics.height);
    bitmap.fontSize = this.standardFontSize();
    bitmap.textColor = this.systemColor();
    bitmap.drawText(
      message,
      x,
      y,
      length * this.standardFontSize(),
      this.lineHeight(),
      align
    );
    return new Sprite(bitmap);
  };

  // パラメーター値描画
  BaseWindow.prototype.DrawParameterValue = function (
    message,
    x,
    y,
    length,
    afterName
  ) {
    let bitmap = new Bitmap(Graphics.width, Graphics.height);
    bitmap.fontSize = this.standardFontSize();
    bitmap.textColor = this.normalColor();
    bitmap.drawText(
      message,
      x,
      y,
      length * this.standardFontSize(),
      this.lineHeight(),
      "right"
    );
    if (afterName) {
      bitmap.textColor = this.systemColor();
      bitmap.drawText(
        afterName,
        x + length * this.standardFontSize() + 10,
        y,
        String(afterName).length * this.standardFontSize(),
        this.lineHeight(),
        "left"
      );
    }
    return new Sprite(bitmap);
  };
})();
