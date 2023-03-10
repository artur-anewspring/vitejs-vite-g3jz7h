import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-open-file')
export class MyOpenFileElement extends LitElement {
  @property()
  openFileButtonCaption = 'Open';

  render() {
    return html`
      <div class="card">
        <button @click=${this._onClick} part="button">
          ${this.openFileButtonCaption}
        </button>
      </div>
    `;
  }

  private _onClick() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = (_) => {
      let files = Array.from(input.files);
      console.log(files);
    };
    input.click();
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .card {
      padding: 2em;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-open-file': MyOpenFileElement;
  }
}
