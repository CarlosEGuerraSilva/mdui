import type { CSSResultGroup, TemplateResult } from 'lit';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { componentStyle } from '@mdui/shared/lit-styles/component-style.js';
import { topAppBarTitleStyle } from './top-app-bar-title-style.js';

/**
 * @slot - 顶部应用栏的标题文本
 *
 * @csspart label - 文本
 */
@customElement('mdui-top-app-bar-title')
export class TopAppBarTitle extends LitElement {
  static override styles: CSSResultGroup = [
    componentStyle,
    topAppBarTitleStyle,
  ];

  protected override render(): TemplateResult {
    return html`<div part="label" class="label"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mdui-top-app-bar-title': TopAppBarTitle;
  }
}
