var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var human = new render.DisplayObjectContainer();
human.x = -50;
human.y = -100;
var humanContainer = new render.DisplayObjectContainer();
humanContainer.addChild(human);
var head = new render.Bitmap();
head.source = "head.png";
human.addChild(head);
var trunk = new render.Bitmap();
trunk.source = "trunk.png";
human.addChild(trunk);
var left_arm = new render.Bitmap();
left_arm.source = "left_arm.png";
human.addChild(left_arm);
var right_arm = new render.Bitmap();
right_arm.source = "right_arm.png";
human.addChild(right_arm);
var left_leg = new render.Bitmap();
left_leg.source = "left_leg.png";
human.addChild(left_leg);
var right_leg = new render.Bitmap();
right_leg.source = "right_leg.png";
human.addChild(right_leg);
var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["left_arm.png", "right_arm.png", "left_leg.png", "right_leg.png", "head.png", "trunk.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        this.x += this.vx * duringTime;
        this.y += this.vy * duringTime * 2;
        this.rotation += Math.PI * duringTime;
    };
    return HumanBody;
}(Body));
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx = 5;
body.y = 100;
ticker.start([body]);
//# sourceMappingURL=game.js.map