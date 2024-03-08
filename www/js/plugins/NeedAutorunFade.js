//============================================================================
// NeedAutorunFade.js
//============================================================================

/*:ja
 * @plugindesc ver1.01 移動先の自動実行でフェードアウトママ
 * @author まっつＵＰ
 *
 * @help
 *
 * RPGで笑顔を・・・
 *
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 *
 * イベントコマンド「場所移動」を拡張します。
 * 移動した先に発生条件を満たした自動実行イベントがあり
 * そのイベントの実行内容の先頭にフェードアウトがあれば
 * イベントコマンド「場所移動」によるフェードインを行いません。
 * （その実行内容でイベントコマンド「フェードイン」によって
 *   フェードインさせてください。）
 * ただし、先頭である必要があります。
 * 先頭に注釈以外のイベントコマンドがある場合は適用されません。
 *
 * 新規プロジェクト以外でうまく動作しない場合は
 * ゲームを開始してから場所移動をする前に一回
 * $gamePlayer._NAFlist = 0;
 * をスクリプトで実行すると動作を期待できます。
 *
 * ver1.01 事前に手動でフェードアウトを入れている際に場所移動すると
 *         自動フェードインが効いてしまう不具合を修正
 *
 * 利用規約(2019/9/7変更)：
 * この作品は マテリアル・コモンズ・ブルー・ライセンスの下に提供されています。
 * https://materialcommons.tk/mtcm-b-summary/
 * クレジット表示：まっつＵＰ
 *
 */

(function () {
  var _Game_Player_initMembers = Game_Player.prototype.initMembers;
  Game_Player.prototype.initMembers = function () {
    _Game_Player_initMembers.call(this);
    this._NAFlist = 0;
    this._NAFpreCom = 0;
  };

  var _Game_Interpreter_command201 = Game_Interpreter.prototype.command201;
  Game_Interpreter.prototype.command201 = function () {
    if (
      !$gameParty.inBattle() &&
      !$gameMessage.isBusy() &&
      this._params[5] !== 2
    ) {
      $gamePlayer._NAFlist = 0;
      $gameScreen.startFadeOut(this.fadeSpeed());
    }
    return _Game_Interpreter_command201.call(this);
  };

  var _Game_Interpreter_command221 = Game_Interpreter.prototype.command221;
  Game_Interpreter.prototype.command221 = function () {
    $gamePlayer._NAFpreCom = 1;
    return _Game_Interpreter_command221.call(this);
  };

  var _Game_Interpreter_command222 = Game_Interpreter.prototype.command222;
  Game_Interpreter.prototype.command222 = function () {
    $gamePlayer._NAFpreCom = 0;
    return _Game_Interpreter_command222.call(this);
  };

  var _Game_Event_start = Game_Event.prototype.start;
  Game_Event.prototype.start = function () {
    _Game_Event_start.call(this);
    if (this._starting && $gamePlayer._NAFlist === 0) {
      this.listforcefade();
    }
  };
  Game_Event.prototype.listforcefade = function () {
    var list = this.list();
    $gamePlayer._NAFlist = 1;
    for (var i = 0; i < list.length; i++) {
      if (list.code === 221) {
        $gamePlayer._NAFlist = 2;
        return;
      }
      if (list.code === 108) {
        continue;
      } else {
        return;
      }
    }
  };

  //更新後のロード後の挙動改善を含めている
  var _Scene_Map_fadeInForTransfer = Scene_Map.prototype.fadeInForTransfer;
  Scene_Map.prototype.fadeInForTransfer = function () {
    _Scene_Map_fadeInForTransfer.call(this);
    var fadetype = $gamePlayer._fadeType;
    if (fadetype === undefined) {
      $gamePlayer._NAFlist = 2;
    }
    if (
      (!$gameMap.isAnyEventStarting() && fadetype !== 2) ||
      $gamePlayer._NAFlist < 2
    ) {
      if ($gamePlayer._NAFpreCom === 0) {
        $gameScreen.startFadeIn(this.fadeSpeed());
      }
    }
  };
})();
