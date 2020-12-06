# 评测模板管理

评测模板分成 `IO`、`SPJ`、`Advanced` 三种类型。

`IO`：适用于输入输出型题目的评测

`SPJ`：适用于 Special Judge 型题目的评测，即一道题目可能有多解，需要一个单独的程序来对答案判正确性

`Advanced`：适用于进阶模式型题目的评测。是更强大的评测能力，让出题方来定义如何评测一份代码/一些文件

本章中将会描述一下，评测模板的业务，以及如何制作、测试、添加评测模板。

## 评测模板列表

![img](/img/manager-manual/image-20201206232355529.png)

操作栏右边有 `Edit` 和 `Fork`。

## IO 类型

IO 即 `input/output`，即通过标准输入输出，将测试数据作为标准输入流输入到用户程序，用户程序的标准输出流的输出和标准答案进行比对，根据用户程序运行时状态和运行后结果，来评价用户程序的正确性和性能。

SDUOJ 中，添加一个 IO 类型的评测模板，意味着多增加一种 "评测语言" 的配置。

下图是评测 C++11 程序的评测模板配置：

![img](/img/manager-manual/image-20201206232822984.png)

其中，Script 约定为一个 JSON 串。格式及其解释：

```json
{
    "user":{                   // user 即定义对用户程序的操作
        "compile":{         // 编译操作和配置
            "srcName": "代码存到哪个文件名",  // NotNull
            "maxCpuTime": 1000,    // 最大CPU执行时间，NotNull
            "maxRealTime": 2000,    // 最大真实执行时间=CPU执行时间+IO执行时间，不定义时取 maxCpuTime
            "maxMemory": 262144,     // 最大内存
            "commands": [    // 大于0条的  shell 命令
                "..."
            ]
        },
        "run":{    // 运行操作和配置
            "command": "...",    // 要运行的 shell 命令, NotNull
            "seccompRule": "general",    // 安全沙箱规则
            "maxCpuTimeFactor": 1,    // 最大CPU执行时间倍率，评测时限制值=题目设置的时间限制*倍率，不定义时取1
            "maxRealTimeFactor": 1,    // 最大真实执行时间倍率，评测时限制值=题目设置的时间限制*倍率，不定义时取1
            "maxMemoryFactor": 1,    // 最大内存倍率，评测时限制值=题目设置的内存限制*倍率，不定义时取1
            "envs": [    // 环境变量，可不定义
                "..."
            ]
        }
    }
}
```

* C++11 的评测模板样例如下：

```json
{
    "user":{
        "compile":{
            "srcName":"solution.cc",
            "maxCpuTime":3000,
            "maxRealTime":5000,
            "maxMemory":262144,
            "commands":[
                "/usr/bin/g++ -DONLINE_JUDGE -O2 -w -fmax-errors=3 -std=c++11 solution.cc -lm -o solution"
            ]
        },
        "run":{
            "command":"solution",
            "seccompRules":"c_cpp"
        }
    }
}
```

* Python3 的评测模板样例如下：

```json
{
    "user":{
        "compile":{
            "srcName":"solution.py",
            "maxCpuTime":3000,
            "maxRealTime":5000,
            "maxMemory":262144,
            "commands":[
                "/usr/bin/python3 -m py_compile solution.py"
            ]
        },
        "run":{
            "command":"/usr/bin/python3 __pycache__/solution.cpython-36.pyc",
            "seccompRules":"general",
            "maxRealTimeFactor":2,
            "maxCpuTimeFactor":2
        }
    }
}
```

* Python2 的评测模板样例如下：

```json
{
    "user":{
        "compile":{
            "srcName":"solution.py",
            "maxCpuTime":3000,
            "maxRealTime":5000,
            "maxMemory":262144,
            "commands":[
                "/usr/bin/python -m py_compile solution.py"
            ]
        },
        "run":{
            "command":"/usr/bin/python solution.pyc",
            "seccompRules":"general",
            "maxRealTimeFactor":2,
            "maxCpuTimeFactor":2
        }
    }
}
```

* Java8 的评测模板样例如下：

```json
{
    "user":{
        "compile":{
            "srcName":"Main.java",
            "maxCpuTime":3000,
            "maxRealTime":5000,
            "maxMemory":0,
            "commands":[
                "/usr/bin/javac Main.java -encoding UTF8"
            ]
        },
        "run":{
            "command":"/usr/bin/java -XX:MaxRAM={problemMemoryLimit}k -Djava.security.manager -Djava.awt.headless=true Main",
            "seccompRules":"general",
            "maxMemoryFactor":0,
            "maxCpuTimeFactor":2,
            "maxRealTimeFactor":2
        }
    }
}
```

## SPJ 类型

spj 即 Special Judge，对于一些有多解的题目，需要一个单独的程序来对答案判正确性。

```json
{
    "user":{       // user 即定义对用户程序的操作
        // 与 IO 类型评测模板内定义是相同的
    },
    "spj":{         // spj 即定义对 spj 程序的操作
        "compile":{         // 编译操作和配置
            "srcName": "代码存到哪个文件名",  // NotNull
            "maxCpuTime": 1000,    // 最大CPU执行时间，NotNull
            "maxRealTime": 2000,    // 最大真实执行时间=CPU执行时间+IO执行时间，不定义时取 maxCpuTime
            "maxMemory": 262144,     // 最大内存
            "commands": [    // 大于0条的  shell 命令
                "..."
            ]
        },
        "run":{    // 运行操作和配置
            "command": "...",    // 要运行的 shell 命令, NotNull
            "seccompRule": "general",    // 安全沙箱规则
            "maxCpuTimeFactor": 1,    // 最大CPU执行时间倍率，评测时限制值=题目设置的时间限制*倍率，不定义时取1
            "maxRealTimeFactor": 1,    // 最大真实执行时间倍率，评测时限制值=题目设置的时间限制*倍率，不定义时取1
            "maxMemoryFactor": 1,    // 最大内存倍率，评测时限制值=题目设置的内存限制*倍率，不定义时取1
            "envs": [    // 环境变量，可不定义
                "..."
            ]
        }
    }
}
```

待写

## Advanced 类型

待写

