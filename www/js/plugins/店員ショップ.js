//=============================================================================
// 店員ショップ / ClerkShop.js
//=============================================================================

/*:ja
 * v0.1.5
 * @plugindesc
 * ショップ画面のレイアウトを変更します。
 *
 * @author Declare War
 *
 * @param UseBackPicture
 * @default true
 * @desc 背景画像を使うかどうか(true/false)
 *
 * @param BackPicture
 * @default Shop_Back_Picture
 * @desc 背景の画像ファイル名
 *
 * @param MessagePicture
 * @default Shop_Message_Picture
 * @desc ふきだしの画像ファイル名
 *
 * @param ClerkPicture
 * @default Shop_Clerk_
 * @desc 店員の画像ファイル名(ファイル名の最後に変数の値がつく)
 *
 * @param ClerkVariables
 * @default 10
 * @desc 店員の画像指定に使う変数
 *
 * @param MessageVariables
 * @default 11
 * @desc 店員のセリフ指定に使う変数
 *
 * @param MessageFontSize
 * @default 24
 * @desc メッセージのフォントサイズ(デフォルトは28)
 *
 * @param MessageStartX
 * @default 0
 * @desc メッセージ描画開始X座標(0以上)
 *
 * @param MessageStartY
 * @default 0
 * @desc メッセージ描画開始Y座標(0以上)
 *
 * @param Word1
 * @default 変化なし
 * @desc ワードの設定
 *
 * @param Word2
 * @default 装備不可
 * @desc ワードの設定
 *
 * @param MessageTexts
 * @default いらっしゃいませ|どれにしますか？,\c[17]いらっしゃいませ|\c[24]どれにしますか？
 * @desc 店員のセリフ(セリフ間を,で区切る)
 * 変数が1のとき,変数が2のとき,・・・となる
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 * ●補足説明など
 * 画像は全て画面サイズでPicturesフォルダに入れる
 *
 * 右側の余白は336×444
 *
 * 制御文字使うとき改行は |
 * 他は文章の表示と同じ \c[17] \i[10]
 *
 * 店員画像とメッセージの変数は値が0の場合は機能しない
 * (1以上にする必要あり)
 */

(function () {
  // params ------------------------------------------------------------------
  var parameters = PluginManager.parameters("店員ショップ");
  var Params = {};
  Params.backPicture = parameters["BackPicture"] || "";
  Params.messagePicture = parameters["MessagePicture"] || "";
  Params.clerkPicture = parameters["ClerkPicture"] || "";
  Params.clerkVariables = Number(parameters["ClerkVariables"]);
  Params.messageVariables = Number(parameters["MessageVariables"]);
  Params.messageFontSize = Number(parameters["MessageFontSize"]);
  Params.messageStartX = Number(parameters["MessageStartX"]);
  Params.messageStartY = Number(parameters["MessageStartY"]);
  Params.texts = parameters["MessageTexts"].split(",");
  Params.word1 = parameters["Word1"] || "";
  Params.word2 = parameters["Word2"] || "";
  Params.useBackPicture = parameters["UseBackPicture"] || "";
  // Window_Shop_Gold --------------------------------------------------------
  //
  function Window_Shop_Gold() {
    this.initialize.apply(this, arguments);
  }

  Window_Shop_Gold.prototype = Object.create(Window_Gold.prototype);
  Window_Shop_Gold.prototype.constructor = Window_Shop_Gold;
  // windowWidth
  Window_Shop_Gold.prototype.windowWidth = function () {
    return Graphics.boxWidth - 480;
  };
  // Window_Shop_ItemCategory ------------------------------------------------
  //
  function Window_Shop_ItemCategory() {
    this.initialize.apply(this, arguments);
  }

  Window_Shop_ItemCategory.prototype = Object.create(
    Window_ItemCategory.prototype
  );
  Window_Shop_ItemCategory.prototype.constructor = Window_Shop_ItemCategory;
  // windowWidth
  Window_Shop_ItemCategory.prototype.windowWidth = function () {
    return 480;
  };
  // maxCols
  Window_Shop_ItemCategory.prototype.maxCols = function () {
    return 3;
  };
  // makeCommandList
  Window_Shop_ItemCategory.prototype.makeCommandList = function () {
    this.addCommand(TextManager.item, "item");
    this.addCommand(TextManager.weapon, "weapon");
    this.addCommand(TextManager.armor, "armor");
  };
  // Window_Shop_Text --------------------------------------------------------
  //
  function Window_Shop_Text() {
    this.initialize.apply(this, arguments);
  }

  Window_Shop_Text.prototype = Object.create(Window_Base.prototype);
  Window_Shop_Text.prototype.constructor = Window_Shop_Text;

  Window_Shop_Text.prototype.initialize = function (x, y, w, h) {
    Window_Base.prototype.initialize.call(this, x, y, w, h);
    this.opacity = 0;
    this.drawClerkMessage();
  };
  // standardFontSize
  Window_Shop_Text.prototype.standardFontSize = function () {
    return Params.messageFontSize;
  };
  // drawClerkMessage
  Window_Shop_Text.prototype.drawClerkMessage = function () {
    var num = $gameVariables.value(Params.messageVariables) || 0;
    if (num === 0) return;
    var text = Params.texts[num - 1] || "";
    this.drawTextEx(text, Params.messageStartX, Params.messageStartY);
  };
  // processCharacter
  Window_Shop_Text.prototype.processCharacter = function (textState) {
    switch (textState.text[textState.index]) {
      case "|":
        this.processNewLine(textState);
        break;
      case "\n":
        this.processNewLine(textState);
        break;
      case "\f":
        this.processNewPage(textState);
        break;
      case "\x1b":
        this.processEscapeCharacter(
          this.obtainEscapeCode(textState),
          textState
        );
        break;
      default:
        this.processNormalCharacter(textState);
        break;
    }
  };
  // Window_ShopNumber -------------------------------------------------------
  // windowWidth
  Window_ShopNumber.prototype.windowWidth = function () {
    return 480;
  };
  // Window_ShopStatus -------------------------------------------------------
  // refresh
  Window_ShopStatus.prototype.refresh = function () {
    this.contents.clear();
    if (this._item) {
      var x = this.textPadding();
      this.drawPossession(x, 0);
      if (this.isEquipItem()) {
        this.drawEquipInfo(x, this.lineHeight());
      }
    }
  };
  // drawEquipInfo
  Window_ShopStatus.prototype.drawEquipInfo = function (x, y) {
    var members = this.statusMembers();
    var cw = this.contents.width / 2 - 10;
    var dx;
    var dy;
    for (var i = 0; i < members.length; i++) {
      dx = x + (i % 2) * (cw + 10);
      dy = y + Math.floor(i / 2) * this.lineHeight() * 2;
      this.drawActorEquipInfo(dx, dy, members[i]);
    }
  };
  // drawActorEquipInfo
  Window_ShopStatus.prototype.drawActorEquipInfo = function (x, y, actor) {
    var enabled = actor.canEquip(this._item);
    this.changePaintOpacity(enabled);
    this.resetTextColor();
    this.changeTextColor(this.systemColor());
    this.drawText(actor.name(), x, y, 168);
    this.changeTextColor(this.normalColor());
    var item1 = this.currentEquippedItem(actor, this._item.etypeId);
    if (enabled) {
      this.drawActorParamChange(x, y + this.lineHeight(), actor, item1);
    } else {
      this.drawText(Params.word2, x, y + this.lineHeight(), 212);
    }
    this.changePaintOpacity(true);
  };
  //　drawActorParamChange
  Window_ShopStatus.prototype.drawActorParamChange = function (
    x,
    y,
    actor,
    item1
  ) {
    var width = 212;
    var paramId = this.paramId();
    var change =
      this._item.params[paramId] - (item1 ? item1.params[paramId] : 0);
    this.changeTextColor(this.paramchangeTextColor(change));
    if (change !== 0) {
      this.drawText((change > 0 ? "+" : "") + change, x, y, width);
    } else {
      this.drawText(Params.word1, x, y, width);
    }
  };

  // Window_ShopBuy ----------------------------------------------------------
  // windowWidth
  Window_ShopBuy.prototype.windowWidth = function () {
    return 480;
  };
  // Window_ShopSell ---------------------------------------------------------
  // windowWidth
  Window_ShopSell.prototype.windowWidth = function () {
    return 480;
  };
  // maxCols
  Window_ShopSell.prototype.maxCols = function () {
    return 1;
  };
  // Scene_Shop --------------------------------------------------------------
  // createBackground
  Scene_Shop.prototype.createBackground = function () {
    this._backgroundSprite = new Sprite();
    if (Params.useBackPicture === "true") {
      this._backgroundSprite.bitmap = ImageManager.loadPicture(
        Params.backPicture,
        0
      );
    } else {
      this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    }
    this.addChild(this._backgroundSprite);

    var num = $gameVariables.value(Params.clerkVariables) || 0;
    if (num > 0) {
      var name = Params.clerkPicture + String(num);
      this._clerkSprite = new Sprite();
      this._clerkSprite.bitmap = ImageManager.loadPicture(name);
      this.addChild(this._clerkSprite);
    }

    this._messageSprite = new Sprite();
    this._messageSprite.bitmap = ImageManager.loadPicture(
      Params.messagePicture,
      0
    );
    this.addChild(this._messageSprite);
  };
  // create
  var _Scene_Shop_create = Scene_Shop.prototype.create;
  Scene_Shop.prototype.create = function () {
    _Scene_Shop_create.call(this);
    this.createTextWindow();
  };
  // createHelpWindow
  var _Scene_Shop_createHelpWindow = Scene_Shop.prototype.createHelpWindow;
  Scene_Shop.prototype.createHelpWindow = function () {
    _Scene_Shop_createHelpWindow.call(this);
    this._helpWindow.y = Graphics.boxHeight - this._helpWindow.height;
  };
  // createGoldWindow
  Scene_Shop.prototype.createGoldWindow = function () {
    this._goldWindow = new Window_Shop_Gold(0, 0);
    this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
    this._goldWindow.y =
      Graphics.boxHeight - this._helpWindow.height - this._goldWindow.height;
    this.addWindow(this._goldWindow);
  };
  // createCommandWindow
  Scene_Shop.prototype.createCommandWindow = function () {
    var w1 = this._goldWindow.x;
    var w2 = 480;
    this._commandWindow = new Window_ShopCommand(w2, this._purchaseOnly);
    this._commandWindow.x = 0;
    this._commandWindow.y = 0;
    this._commandWindow.setHandler("buy", this.commandBuy.bind(this));
    this._commandWindow.setHandler("sell", this.commandSell.bind(this));
    this._commandWindow.setHandler("cancel", this.popScene.bind(this));
    this.addWindow(this._commandWindow);
  };
  // createDummyWindow
  Scene_Shop.prototype.createDummyWindow = function () {
    var y = this._commandWindow.height;
    var w = 480;
    var h =
      Graphics.boxHeight - this._helpWindow.height - this._commandWindow.height;
    this._dummyWindow = new Window_Base(0, y, w, h);
    this.addWindow(this._dummyWindow);
  };
  // createNumberWindow
  Scene_Shop.prototype.createNumberWindow = function () {
    var wy = this._dummyWindow.y;
    var wh = this._dummyWindow.height - 72;
    this._numberWindow = new Window_ShopNumber(0, wy, wh);
    this._numberWindow.hide();
    this._numberWindow.setHandler("ok", this.onNumberOk.bind(this));
    this._numberWindow.setHandler("cancel", this.onNumberCancel.bind(this));
    this.addWindow(this._numberWindow);
  };
  // createStatusWindow
  Scene_Shop.prototype.createStatusWindow = function () {
    var y = this._dummyWindow.y + this._dummyWindow.height - 72;
    var w = 480;
    var h = this._dummyWindow.height;
    this._statusWindow = new Window_ShopStatus(0, y - 144, w, 72 + 144);
    this._statusWindow.hide();
    this.addWindow(this._statusWindow);
  };
  // createBuyWindow
  Scene_Shop.prototype.createBuyWindow = function () {
    var wy = this._dummyWindow.y;
    var wh = this._dummyWindow.height - 72;
    this._buyWindow = new Window_ShopBuy(0, wy, wh - 144, this._goods);
    this._buyWindow.setHelpWindow(this._helpWindow);
    this._buyWindow.setStatusWindow(this._statusWindow);
    this._buyWindow.hide();
    this._buyWindow.setHandler("ok", this.onBuyOk.bind(this));
    this._buyWindow.setHandler("cancel", this.onBuyCancel.bind(this));
    this.addWindow(this._buyWindow);
  };
  // createCategoryWindow
  Scene_Shop.prototype.createCategoryWindow = function () {
    this._categoryWindow = new Window_Shop_ItemCategory();
    this._categoryWindow.setHelpWindow(this._helpWindow);
    this._categoryWindow.y = this._commandWindow.height;
    this._categoryWindow.hide();
    this._categoryWindow.deactivate();
    this._categoryWindow.setHandler("ok", this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler("cancel", this.onCategoryCancel.bind(this));
    this.addWindow(this._categoryWindow);
  };
  // createSellWindow
  Scene_Shop.prototype.createSellWindow = function () {
    var wy = this._dummyWindow.y + this._categoryWindow.height;
    var wh = this._dummyWindow.height - 72;
    this._sellWindow = new Window_ShopSell(0, wy, 480, wh);
    this._sellWindow.setHelpWindow(this._helpWindow);
    this._sellWindow.hide();
    this._sellWindow.setHandler("ok", this.onSellOk.bind(this));
    this._sellWindow.setHandler("cancel", this.onSellCancel.bind(this));
    this._categoryWindow.setItemWindow(this._sellWindow);
    this.addWindow(this._sellWindow);
  };
  // createTextWindow
  Scene_Shop.prototype.createTextWindow = function () {
    var x = this._commandWindow.width;
    var w = Graphics.boxWidth - x;
    var h =
      Graphics.boxHeight - this._helpWindow.height - this._goldWindow.height;
    this._textWindow = new Window_Shop_Text(x, 0, w, h);
    this.addWindow(this._textWindow);
  };
  // update
  var _Scene_Shop_update = Scene_Shop.prototype.update;
  Scene_Shop.prototype.update = function () {
    _Scene_Shop_update.call(this);
    if (this._numberWindow && this._sellWindow && this._statusWindow) {
      flag = this._numberWindow.visible || this._sellWindow.visible;
      this._statusWindow.y = flag ? 444 : 300;
      this._statusWindow.height = flag ? 72 : 216;
    }
  };
})();
