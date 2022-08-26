class MyPost extends HTMLElement {
  static get observedAttributes() {
    return [
      'nProfile',
      'like',
      'profile',
      'post',
      'comment',
      'send',
      'comments',
      'viewers',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.like = './src/imagenes/megusta.png';
    this.profile = './src/imagenes/perfil.png';
    this.post = './src/imagenes/post.jpeg';
    this.comment = './src/imagenes/comen.png';
    this.send = './src/imagenes/enviar.png';
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/post/style.css"
        <section>

            
            <img src=${this.profile} height = "50np"></img>
            <h2>${this.nProfile}</h2>
            <img src=${this.post} height = "500np"></img>
            <p> </p>
            <img src=${this.like} height = "40np"></img>
            <img src=${this.comment} height = "40np"></img>
            <img src=${this.send} height = "40np"></img>
            <p> </p>
            <span><strong>${this.viewers}</strong></span>
            <p> </p>
            <span><strong>${this.comments}</strong></span>
            
        </section>
        `;
  }
}

customElements.define('my-post', MyPost);
export default MyPost;
