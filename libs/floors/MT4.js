// 这里需要改楼层名，请和文件名及下面的floorId保持完全一致
// 楼层唯一标识符仅能由字母、数字、下划线组成，且不能由数字开头
// 推荐用法：第20层就用MT20，第38层就用MT38，地下6层就用MT_6（用下划线代替负号），隐藏3层用MT3h（h表示隐藏），等等
main.floors.MT4 = {
    "floorId": "MT4", // 楼层唯一标识符，需要和名字完全一致
    "title": "主塔 4 层", // 楼层中文名
    "name": "4", // 显示在状态栏中的层数
    "canFlyTo": true, // 该楼能否被楼传器飞到（不能的话在该楼也不允许使用楼传器）
    "canUseQuickShop": true, // 该层是否允许使用快捷商店
    "defaultGround": "ground", // 默认地面的图块ID（terrains中）
    "png": [], // 该层默认显示的所有图片；详细用法请查看文档“自定义素材”中的说明。
    // "color": [0,0,0,0.3], // 该层的默认画面色调。本项可不写（代表无色调），如果写需要是一个RGBA数组。
    // "weather": ["snow",5], // 该层的默认天气。本项可忽略表示晴天，如果写则第一项为"rain"或"snow"代表雨雪，第二项为1-10之间的数代表强度。
    // "bgm": "bgm.mp3", // 到达该层后默认播放的BGM。本项可忽略。
    "map": [ // 地图数据，需要是13x13，建议使用地图生成器来生成
        [3,    3,    3,    3,    3,    3,    3,    3,    3,    3,    3,    3,    3],
        [3,    0,    203,  0,    1,    0,    123,  0,    1,    0,    203,  0,    3],
        [3,    81,   1,    81,   1,    0,    0,    0,    1,    81,   1,    81,   3],
        [3,    0,    1,    0,    1,    1,    86,   1,    1,    0,    1,    0,    3],
        [3,    0,    1,    209,  1,    206,  207,  206,  1,    209,  1,    0,    3],
        [3,    205,  1,    31,   1,    28,   206,  28,   1,    31,   1,    205,  3],
        [3,    205,  1,    31,   1,    1,    83,   1,    1,    31,   1,    205,  3],
        [3,    202,  1,    0,    1,    213,  221,  213,  1,    0,    1,    202,  3],
        [3,    0,    1,    0,    1,    27,   213,  27,   1,    0,    1,    0,    3],
        [3,    0,    1,    0,    1,    1,    82,   1,    1,    0,    1,    0,    3],
        [3,    0,    1,    0,    1,    21,   0,    21,   1,    0,    1,    0,    3],
        [3,    87,   1,    0,    203,  0,    0,    0,    203,  0,    1,    88,   3],
        [3,    3,    3,    3,    3,    3,    3,    3,    3,    3,    3,    3,    3],                    
    ],
    "firstArrive": [ // 第一次到该楼层触发的事件

    ],
    "events": { // 该楼的所有可能事件列表
        "6,1": [
            {"type": "if", "condition": "!flag:visitedThief",
                "true": [
                    "\t[hero]\b[down,hero]你得救了！",
                    "\t[杰克,thief]\b[down]啊谢谢你！\n我叫杰克，是一名寻宝猎人，有一天无意中闯入了这座塔，结果被这里的魔物们发现给关在了这里。",
                    "\t[杰克,thief]\b[down]为了感谢你的帮助，我给你把2楼的机关门打开吧。",
                    {"type": "openDoor", "loc": [2,7], "floorId": "MT2"},
                    "\t[杰克,thief]\b[down]另外，我有一把锄头遗失在了这座塔里，如果你能帮我找到，我就可以为你打开18楼的通路",
                    "\t[hero]\b[down,hero]好的，我会尽量帮你找的",
                    {"type": "setValue", "name": "flag:visitedThief", "value": "true"}
                ],
                "false": [
                    {"type": "if", "condition": "item:icePickaxe>0",
                        "true": [
                            "\t[杰克,thief]\b[down]这就是我的锄头！\n我现在就去为你打开18楼的通路！",
                            {"type": "hide"},
                            {"type": "hide", "loc": [6,9], "floorId": "MT18"},
                            {"type": "hide", "loc": [6,10], "floorId": "MT18"},
                        ],
                        "false": [
                            "\t[杰克,thief]\b[down]你找到锄头了吗？",
                            "\t[hero]\b[down,hero]啊还没有，我再去找找~",
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": { // 楼层转换事件；该事件不能和上面的events有冲突（同位置点），否则会被覆盖
        "1,11": {"floorId": "MT5", "stair": "downFloor"},
        "11,11": {"floorId": "MT3", "stair": "upFloor"},
    },
    "afterBattle": { // 战斗后可能触发的事件列表
        "6,4": [{"type":"openDoor", "loc": [6,3]}]
    },
    "afterGetItem": { // 获得道具后可能触发的事件列表

    },
    "afterOpenDoor": { // 开完门后可能触发的事件列表

    },
    "cannotMove": { // 每个图块不可通行的方向
        // 可以在这里定义每个点不能前往哪个方向，例如悬崖边不能跳下去
        // "x,y": ["up", "left"], // (x,y)点不能往上和左走

    },
}

