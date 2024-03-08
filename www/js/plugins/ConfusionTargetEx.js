//=============================================================================
// ConfusionTargetEx.js
//
// ----------------------------------------------------------------------------
// by ecf5DTTzl6h6lJj02
// 2020/12/04
// ----------------------------------------------------------------------------
// Copyright (C) 2020 ecf5DTTzl6h6lJj02
//	This software is released under the MIT lisence.
//	http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 混乱等のステート時に自分をターゲットに含めない
 * @author ecf5DTTzl6h6lJj02
 *
 * @param SwitchId
 * @text 機能を有効にするスイッチのID
 * @type switch
 * @default 1
 * @desc 機能をONにするスイッチID。
 * なしに設定すると常に有効。
 *
 * @param BehaviorOfRecoverAll
 * @text 回復スキルを使用したときの対象
 * @type select
 * @option 通常
 * @value 0
 * @option パターン A
 * @value 1
 * @option パターン B
 * @value 2
 * @default 0
 * @desc 回復をした時の対象
 * 詳しくはプラグインヘルプで確認ください。
 *
 * @help
 * このプラグインは単体でも動作は可能ですが、
 * トリアコンタン様の混乱ステート拡張プラグイン(ConfusionExtend.js)
 * https://raw.githubusercontent.com/triacontane/RPGMakerMV/master/ConfusionExtend.js
 * との併用を前提に作成しています。
 * このプラグイン単体で使用する場合、エネミーもアクターもスキルは使用しません。
 * 攻撃できる場合は攻撃。攻撃できる対象が存在しない場合は防御になります。
 *
 * 混乱ステート拡張プラグインと併用する場合は、
 * このプラグインを混乱ステート拡張プラグインの下(できれば真下)に配置してください。
 *
 * ステートの行動制約が 誰かを攻撃・味方を攻撃になっている場合、
 * ターゲットから自分自身を除外するプラグインです。
 * 全体攻撃のターゲットからも除外され、自身はダメージを受けません。
 * 回復スキルの場合は、自分自身を対象から除外しないようにします。
 * 混乱ステート拡張プラグインで パラメータ『味方対象スキルの対象』がON(true)になっているときは、
 * 全体回復をすると敵全体、及び、自分自身が回復します。
 *
 * プラグインパラメータ『機能を有効にするスイッチのID』で指定したスイッチがONの時のみ有効になるように設定してあります。
 * このパラメータを なし に設定した場合は常に有効になります。
 *
 * 〇プラグインパラメータ『回復スキルを使用したときの対象』について
 * このパラメータで、回復スキルを使用したときのターゲット設定を変更します。
 * 混乱ステート拡張プラグインの『味方対象スキルの対象』の状態によって挙動が変化します。
 *  ・通常
 *      『味方対象スキルの対象』がOFF(false)の時:
 *       　このプラグインの通常通りの設定でターゲットを設定します。
 *
 *      『味方対象スキルの対象』がON(true)の時:
 *      　単体回復の場合は、敵と自分自身でランダムに対象を決定。
 *        全体回復の場合は、敵全体 + 自分自身が対象になります。
 *
 *  ・パターン A
 *      『味方対象スキルの対象がOFF(false)の時:
 *      　自分自身のみ対象にするようになります。
 *
 *      『味方対象スキルの対象』がON(true)の時:
 *      　単体回復の場合は、自分自身のみを対象にします。
 *      　全体回復の場合は、敵全体 + 自分自身が対象になります。
 *
 *  ・パターン B
 *      『味方対象スキルの対象』がOFF(false)の時：
 *      　自分自身のみ対象にするようになります。
 *
 *      『味方対象スキルの対象』がON(true)の時:
 *      　単体回復の場合は、敵の中からランダムに対象を決定。
 *        全体回復の場合は、敵全体を対象にします。
 *      　(自分自身は対象にならないということです)
 *
 * プラグインコマンドはありません。
 *
 */

(() => {
  "use strict";

  //混乱ステート拡張プラグインが有効かのチェックフラグ
  const isActiveConfusionExtend = $plugins.some(
    (plugin) => plugin.name === "ConfusionExtend" && plugin.status
  );

  //プラグインパラメータの取得
  const TargetExValidSwitchId = Number(
    PluginManager.parameters("ConfusionTargetEx")["SwitchId"]
  );
  const BehaviorOfRecoverAll = Number(
    PluginManager.parameters("ConfusionTargetEx")["BehaviorOfRecoverAll"]
  );

  //狙われ率設定の拡張版
  Game_Unit.prototype.tgrSumEx = function (candidacies) {
    return candidacies.reduce((r, candidacy) => r + candidacy.tgr, 0);
  };

  //対象から自身を排除する
  Game_Unit.prototype.randomTargetWithoutMe = function (subject) {
    var candidacies = this.aliveMembers().filter(
      (member) => member !== subject
    );
    var tgrRand = Math.random() * this.tgrSumEx(candidacies);
    var target = null;
    candidacies.forEach(function (candidacy) {
      tgrRand -= candidacy.tgr;
      if (tgrRand <= 0 && !target) {
        target = candidacy;
      }
    });
    return target;
  };

  // 対象に自身も入れる
  Game_Unit.prototype.randomTargetWithMe = function (subject) {
    var candidacies = this.aliveMembers();
    candidacies.push(subject);
    var tgrRand = Math.random() * this.tgrSumEx(candidacies);
    var target = null;
    candidacies.forEach(function (candidacy) {
      tgrRand -= candidacy.tgr;
      if (tgrRand <= 0 && !target) {
        target = candidacy;
      }
    });
    return target;
  };

  if (isActiveConfusionExtend) {
    // 混乱ステート拡張プラグインが導入されているとき
    // console.log("ConfusionExtend is Active")
    var metaTagPrefix = "CE";

    var getArgNumber = function (arg, min, max) {
      if (arguments.length < 2) min = -Infinity;
      if (arguments.length < 3) max = Infinity;
      return (parseInt(convertEscapeCharacters(arg), 10) || 0).clamp(min, max);
    };

    var getMetaValue = function (object, name) {
      var metaTagName = metaTagPrefix + (name ? name : "");
      return object.meta.hasOwnProperty(metaTagName)
        ? object.meta[metaTagName]
        : undefined;
    };

    var getMetaValues = function (object, names) {
      if (!Array.isArray(names)) return getMetaValue(object, names);
      for (var i = 0, n = names.length; i < n; i++) {
        var value = getMetaValue(object, names[i]);
        if (value !== undefined) return value;
      }
      return undefined;
    };

    Game_Action.prototype.setConfusionSpareSkill = function () {
      var state = this.getRestrictState();
      var value = getMetaValues(state, ["予備スキル", "SpareSkill"]);
      if (value) {
        var skillId = getArgNumber(value, 1);
        if (this.subject().canUse($dataSkills[skillId])) {
          this.setSkill(skillId);
        } else if (
          !TargetExValidSwitchId ||
          (TargetExValidSwitchId && $gameSwitches.value(TargetExValidSwitchId))
        ) {
          //予備スキルも使用できない
          if (this.subject().confusionLevel() <= 2) {
            // 敵を攻撃できる行動制約
            this.setAttack();
          } else if (this.subject().friendsUnit().aliveMembers().length > 1) {
            // 味方が自分のほかに存在する
            this.setAttack();
          } else {
            // console.log(this.subject().name(), ":", "予備スキルも含め、使用できるスキルがないので防御");
            this.setGuard();
          }
        }
      } else if (
        !TargetExValidSwitchId ||
        (TargetExValidSwitchId && $gameSwitches.value(TargetExValidSwitchId))
      ) {
        //予備スキルの指定がない場合
        if (this.subject().confusionLevel() <= 2) {
          // 敵を攻撃できる行動制約
          this.setAttack();
        } else if (this.subject().friendsUnit().aliveMembers().length > 1) {
          // 味方が自分のほかに存在する
          this.setAttack();
        } else {
          // console.log(this.subject().name(), ":", "使えるスキルがなく、予備スキルの指定もないので防御");
          this.setGuard();
        }
      }
    };

    //使用効果に回復タブの効果、ステート解除、能力強化、弱体解除の効果があるかチェックする関数
    Game_Action.prototype.isRecoverEffect = function () {
      return (
        this.item().damage.type === 0 &&
        this.item().effects.some((effect) =>
          [11, 12, 13, 22, 31, 34].contains(effect.code)
        )
      );
    };

    //回復魔法を使うときは自身もターゲットに含めるように変更
    Game_Action.prototype.targetsForOpponentsWithMe = function () {
      var targets = [];
      var unit = this.opponentsUnit();
      if (this.isForRandom()) {
        for (var i = 0; i < this.numTargets(); i++) {
          targets.push(unit.randomTarget());
        }
      } else if (this.isForOne()) {
        if (this._targetIndex < 0) {
          if (
            !TargetExValidSwitchId ||
            (TargetExValidSwitchId &&
              $gameSwitches.value(TargetExValidSwitchId) &&
              (this.isHpRecover() ||
                this.isMprecover() ||
                this.isRecoverEffect()) &&
              BehaviorOfRecoverAll < 2)
          ) {
            targets.push(unit.randomTargetWithMe(this.subject()));
          } else {
            targets.push(unit.randomTarget());
          }
        } else {
          targets.push(unit.smoothTarget(this._targetIndex));
        }
      } else {
        targets = unit.aliveMembers();
        if (
          !TargetExValidSwitchId ||
          (TargetExValidSwitchId &&
            $gameSwitches.value(TargetExValidSwitchId) &&
            (this.isHpRecover() ||
              this.isMprecover() ||
              this.isRecoverEffect()) &&
            BehaviorOfRecoverAll < 2)
        ) {
          targets.push(this.subject());
        }
      }
      return targets;
    };

    const CTEX_Game_Action_confusionTarget =
      Game_Action.prototype.confusionTarget;
    Game_Action.prototype.confusionTarget = function () {
      if (
        !TargetExValidSwitchId ||
        (TargetExValidSwitchId && $gameSwitches.value(TargetExValidSwitchId))
      ) {
        return this.confusionSkillTarget();
      }
      return CTEX_Game_Action_confusionTarget.apply(this, arguments);
    };

    //敵ターゲットの決定法を変更
    Game_Action.prototype.confusionSkillTarget = function () {
      var state = this.getRestrictState();
      var value = getMetaValues(state, ["ターゲット", "Target"]);
      if (value) {
        var index = getArgNumber(value, -1);
        this._targetIndex =
          index === -1 ? this.subject().getLastTargetIndex() : index;
      }
      if (this.isForUser()) {
        return this.subject();
      }
      return this.isConfusionSkillTargetForFriend()
        ? this.targetsForConfusionFriends()
        : this.targetsForOpponentsWithMe();
    };

    Game_Action.prototype.targetsForConfusionFriends = function () {
      if (this.isForRandom()) {
        var targets = [];
        var unit = this.friendsUnit();
        for (var i = 0; i < this.numTargets(); i++) {
          if (
            !TargetExValidSwitchId ||
            (TargetExValidSwitchId &&
              $gameSwitches.value(TargetExValidSwitchId))
          ) {
            targets.push(unit.randomTargetWithoutMe(this.subject()));
          } else {
            targets.push(unit.randomTarget());
          }
        }
        return targets;
      } else {
        return this.targetsForFriends();
      }
    };

    Game_Action.prototype.targetsForFriends = function () {
      var targets = [];
      var unit = this.friendsUnit();
      if (this.isForUser()) {
        return [this.subject()];
      } else if (this.isForDeadFriend()) {
        if (this.isForOne()) {
          targets.push(unit.smoothDeadTarget(this._targetIndex));
        } else {
          targets = unit.deadMembers();
        }
      } else if (this.isForOne()) {
        if (this._targetIndex < 0) {
          if (
            !TargetExValidSwitchId ||
            (TargetExValidSwitchId &&
              $gameSwitches.value(TargetExValidSwitchId))
          ) {
            if (
              this.isHpRecover() ||
              this.isMpRecover() ||
              this.isRecoverEffect()
            ) {
              if (0 < BehaviorOfRecoverAll) {
                targets = [this.subject()];
              } else {
                targets.push(unit.randomTarget());
              }
            } else {
              targets.push(unit.randomTargetWithoutMe(this.subject()));
            }
          } else {
            targets.push(unit.randomTarget());
          }
        } else {
          targets.push(unit.smoothTarget(this._targetIndex));
        }
      } else {
        targets = unit.aliveMembers();
        if (
          !TargetExValidSwitchId ||
          (TargetExValidSwitchId && $gameSwitches.value(TargetExValidSwitchId))
        ) {
          if (
            this.isHpRecover() ||
            this.isMpRecover() ||
            this.isRecoverEffect()
          ) {
            if (0 < BehaviorOfRecoverAll) {
              targets = [this.subject()];
            }
          } else {
            targets = targets.filter((target) => target !== this.subject());
          }
        }
      }
      return targets;
    };

    Game_BattlerBase.prototype.isAnyTargetWithoutSelf = function (skill) {
      if (
        !TargetExValidSwitchId ||
        (TargetExValidSwitchId && !$gameSwitches.value(TargetExValidSwitchId))
      ) {
        return true;
      }
      if (!this.isConfused()) {
        // 混乱していない
        return true;
      }
      if (this.confusionLevel() <= 2) {
        // 敵を攻撃できる行動制約
        return true;
      }
      if ([7, 8, 9, 10, 11].contains(skill.scope)) {
        // 味方が対象のスキル
        return true;
      }
      var unit = this.isActor() ? $gameParty : $gameTroop;
      return unit.aliveMembers().length > 1;
    };

    Game_BattlerBase.prototype.meetsSkillConditions = function (skill) {
      return (
        this.meetsUsableItemConditions(skill) &&
        this.isAnyTargetWithoutSelf(skill) &&
        this.isSkillWtypeOk(skill) &&
        this.canPaySkillCost(skill) &&
        !this.isSkillSealed(skill.id) &&
        !this.isSkillTypeSealed(skill.stypeId)
      );
    };

    Game_Action.prototype.isConfusionSkillTargetForFriend = function () {
      // console.log("攻撃対象のチェック");
      switch (this.subject().confusionLevel()) {
        case 1:
          return this.isForFriend();
        case 2:
          if (
            !TargetExValidSwitchId ||
            (TargetExValidSwitchId &&
              $gameSwitches.value(TargetExValidSwitchId) &&
              this.isForOpponent() &&
              this.subject().friendsUnit().aliveMembers().length < 2)
          ) {
            // console.log(this.subject().name(), ":", "味方が自分以外いないので、強制的に敵を攻撃");
            return false;
          }
          return Math.randomInt(2) === 0;
        case 3:
          return !this.isConfusionSkillTargetReverse();
      }
      return false;
    };
  } else {
    Game_Action.prototype.setConfusion = function () {
      // console.log(this.subject().friendsUnit().aliveMembers().length);
      if (
        (!TargetExValidSwitchId ||
          (TargetExValidSwitchId &&
            $gameSwitch.value(TargetExValidSwitchId))) &&
        this.subject().confusionLevel() === 3 &&
        this.subject().friendsUnit().aliveMembers().length < 2
      ) {
        // console.log(this.subject().name(), ":", "攻撃対象がいないので防御");
        this.setGuard();
      } else {
        this.setAttack();
      }
    };

    Game_Action.prototype.confusionTarget = function () {
      switch (this.subject().confusionLevel()) {
        case 1:
          return this.opponentsUnit().randomTarget();
        case 2:
          if (
            ((!TargetExValidSwitchId ||
              (TargetExValidSwitchId &&
                $gameSwitches.value(TargetExValidSwitchId))) &&
              this.subject().friendsUnit().aliveMembers().length < 2) || // 味方が自分しかいない
            Math.randomInt(2) === 0
          ) {
            // もしくは抽選で敵への攻撃が選ばれた
            return this.opponentsUnit().randomTarget();
          }
          return !TargetExValidSwitchId ||
            (TargetExValidSwitchId &&
              $gameSwitches.value(TargetExValidSwitchId))
            ? this.friendsUnit().randomTargetWithoutMe(this.subject())
            : this.friendUnit().randomTarget();
        default:
          return !TargetExValidSwitchId ||
            (TargetExValidSwitchId &&
              $gameSwitches.value(TargetExValidSwitchId))
            ? this.friendsUnit().randomTargetWithoutMe(this.subject())
            : this.friendUnit().randomTarget();
      }
    };
  }
})();
