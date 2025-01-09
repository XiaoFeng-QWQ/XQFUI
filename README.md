# XQFUI - 轻量级响应式 UI 组件库

## 特性

- **响应式设计**：适配桌面和移动设备，确保良好的用户体验。
- **自定义主题**：可根据需要轻松修改颜色和样式。
- **轻量级**：小巧的 CSS 和 JavaScript 代码，减少加载时间。
- **易于集成**：兼容大部分前端框架和纯 HTML 页面。

## 使用示例

### 按钮

`XQFUI` 提供了多种样式的按钮，支持悬浮、点击效果。

```html
<a href="#" class="XQFUI-main-btn">点击我</a>
```

### 卡片

卡片组件适用于展示内容，如图片、文本或按钮。

```html
<div class="XQFUI-card">
    <h2>卡片标题</h2>
    <p>这是一个卡片的内容，您可以在这里展示任何信息。</p>
</div>
```

### 导航栏

`XQFUI` 的导航栏组件提供了固定布局和响应式设计。

```html
<div class="XQFUI-navbar">
    <a href="#">首页</a>
    <a href="#">关于</a>
    <a href="#">服务</a>
    <a href="#">联系我们</a>
</div>
```

### 弹出框

此组件需要引入jQuery

```html
<button class="XQFUI-main-btn" data-open-modal="#myModal">打开弹出框</button>

<!-- 弹出框 -->
<div class="XQFUI-modal-overlay" id="example-modal">
    <div class="XQFUI-modal">
        <div class="XQFUI-modal-header">弹出框标题</div>
        <div class="XQFUI-modal-body">这里是弹出框内容。</div>
        <div class="XQFUI-modal-footer">
            <button class="XQFUI-main-btn close-btn">关闭</button>
        </div>
    </div>
</div>
```

### 输入框

为表单提供样式美化的输入框。

```html
<input type="text" class="XQFUI-input-field" placeholder="请输入内容">
```

## 响应式设计

`XQFUI` 的所有组件都经过精心设计，确保它们在各种设备上的显示效果都很好。以下是一些响应式特性：

- **顶部横幅**：根据屏幕宽度自动调整字体大小。
- **卡片布局**：在桌面上显示两列卡片，在移动设备上显示单列。

## 主题定制

你可以通过修改 CSS 变量或直接编辑 `XQFUI` 的 CSS 来定制组件的外观。例如：

```css
/* 修改主色调 */
:root {
    --primary-color: #FFD700;
    --secondary-color: #FF8C00;
}

/* 自定义按钮颜色 */
.XQFUI-main-btn {
    background-color: var(--primary-color);
}

.XQFUI-main-btn:hover {
    background-color: var(--secondary-color);
}
```

## API

### Modal（弹出框）

插件支持通过 JavaScript 打开和关闭弹出框。

```javascript
// 打开弹出框
$('#myModal').fadeIn(300);

// 关闭弹出框
$('#myModal').fadeOut(300);
```

### 配置选项

你可以通过修改初始化配置来定制插件行为，例如动画速度、选择器等。

```javascript
$('body').modal({
    openButtonSelector: '.XQFUI-main-btn[data-open-modal]',
    closeButtonSelector: '.close-btn',
    overlaySelector: '.XQFUI-modal-overlay',
    modalSelector: '.XQFUI-modal',
    animationSpeed: 300
});
```

## 贡献

欢迎为 `XQFUI` 贡献代码或报告问题。如果你发现 bug 或有功能建议，请打开 Issue。如果你有更好的实现或修复，欢迎提交 Pull Request。

### 开发者流程

1. 克隆代码库并创建新的分支
2. 在本地进行修改并提交
3. 创建 Pull Request（PR）

## 开源协议

[MIT License](LICENSE)