"use strict";
const fs = require('fs');
function readFile() {
    var map_path = __dirname + "/map.json";
    var content = fs.readFileSync(map_path, "utf-8");
    var obj = JSON.parse(content);
    var mapData = obj.map;
    return mapData;
}
function writeFlie() {
    var map_path = __dirname + "/map.json";
    var content = fs.writeFileSync(map_path, obj, "utf-8");
    var obj = JSON.stringify({ map: mapData });
}
function createMapEditor() {
    var world = new editor.WorldMap();
    var rows = mapData.length;
    var cols = mapData[0].length;
    for (var col = 0; col < rows; col++) {
        for (var row = 0; row < cols; row++) {
            var tile = new editor.Tile();
            tile.setWalkable(mapData[row][col]);
            tile.x = col * editor.GRID_PIXEL_WIDTH;
            tile.y = row * editor.GRID_PIXEL_HEIGHT;
            tile.ownedCol = col;
            tile.ownedRow = row;
            tile.width = editor.GRID_PIXEL_WIDTH;
            tile.height = editor.GRID_PIXEL_HEIGHT;
            world.addChild(tile);
            eventCore.register(tile, events.displayObjectRectHitTest, onTileClick);
        }
    }
    return world;
}
function onTileClick(tile) {
    var TileWalkable = mapData[tile.ownedRow][tile.ownedCol];
    if (TileWalkable == 1) {
        TileWalkable = 0;
    }
    else if (TileWalkable == 0) {
        TileWalkable = 1;
    }
    mapData[tile.ownedRow][tile.ownedCol] = TileWalkable;
    tile.setWalkable(TileWalkable);
    console.log(tile);
}
var container = new render.DisplayObjectContainer();
var Button = new render.Rect();
container.addChild(Button);
Button.x = 100;
Button.y = 100;
Button.width = 150;
Button.height = 100;
Button.color = "#0000FF";
var mapData = readFile();
var renderCore = new render.RenderCore();
var eventCore = new events.EventCore();
eventCore.init();
var editor = createMapEditor();
renderCore.start(editor);
