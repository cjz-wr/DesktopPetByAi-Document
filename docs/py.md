# Py插件开发指南

> [!NOTE]
> 本文档为桌面宠物AI项目的Py插件开发提供核心指导。

> [!CAUTION]
> 插件功能目前存在验证性功能，使用时需谨慎

## 目录
1. [快速开始](#快速开始)
2. [核心规范](#核心规范)
3. [开发示例](#开发示例)
4. [常见问题](#常见问题)

---

## 快速开始

### 什么是Py插件
Py插件是使用Python编写的可扩展功能模块，具有：
- 🐍 **语言特性**：利用Python简洁性
- 🔧 **功能扩展**：为桌面宠物AI添加自定义功能
- 📦 **模块化设计**：独立代码单元，易于维护

### 插件部署流程
1. **编写插件文件** - 按模板创建Python文件
2. **放置插件文件** - 复制到 `./plugins/` 目录
3. **注册插件信息** - 通过GUI界面添加插件
4. **填写元数据** - 提供插件名称、描述等信息
5. **保存测试** - 验证插件功能

---

## 核心规范

### register()函数规范 ⭐
`register()` 是插件系统中**唯一且必需**的接口函数：

```python
def register():
    """
    插件注册函数 - 系统入口点
    
    Returns:
        callable: 返回可调用的对象
    """
    return your_main_function
```

> [!WARNING]
> ⚠️ **关键要求**：插件输出必须且只能通过 `register()` 函数传递

### 基本代码模板
```python
# plugins/hello_plugin.py
def say_hello(a=1, b=2, c=3):
    print(f"Hello from plugin with a={a}, b={b}, c={c}!")
    return f"Processed: {a}, {b}, {c}"

def register():
    return say_hello
```

---

## 开发示例

### 工具类插件
```python
import datetime
import platform

class SystemToolsPlugin:
    def get_system_info(self):
        """获取系统信息"""
        return {
            "timestamp": datetime.datetime.now().isoformat(),
            "platform": platform.platform(),
            "message": "系统信息获取成功"
        }

def register():
    plugin = SystemToolsPlugin()
    return plugin.get_system_info
```

### 网络类插件
```python
import requests
import json

def fetch_weather(city="北京"):
    """获取天气信息"""
    try:
        url = f"http://wttr.in/{city}?format=j1" 
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            data = response.json()
            return {
                "success": True,
                "city": city,
                "temperature": data["current_condition"][0]["temp_C"],
                "description": data["current_condition"][0]["weatherDesc"][0]["value"]
            }
    except Exception as e:
        return {"success": False, "error": str(e)}

def register():
    return fetch_weather
```

---

## 常见问题

### 插件加载失败
**症状：** 插件在管理界面显示加载失败

**解决方案：**
1. **检查register()函数**
   ```python
   # ❌ 错误
   def main_function():
       return "result"
   
   # ✅ 正确
   def main_function():
       return "result"
   
   def register():  # 必需的注册函数
       return main_function
   ```

2. **语法检查** - 使用IDE语法检查功能

3. **依赖安装**
   ```bash
   pip install required_package
   ```

### 插件执行异常
**诊断步骤：**
1. **启用调试模式**
   ```python
   import os
   os.environ['PLUGIN_DEBUG'] = 'true'
   ```

2. **查看日志输出** - 分析错误堆栈信息

3. **参数验证**
   ```python
   def debug_plugin(*args, **kwargs):
       logger.debug(f"接收参数: args={args}, kwargs={kwargs}")
       return process_args(args, kwargs)
   ```


## 结语

如需进一步帮助，请参考项目源码或联系技术支持团队。
## 评论

<Utterances repo="cjz-wr/DesktopPetByAi-Document" />