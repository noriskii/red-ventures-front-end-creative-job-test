class HotelView extends View {

    template(model) {
        return (model != [])
            ?`
            <aside class="filter-box">
                <p class="title"></p>
                <div class="price-filter"></div>
                <div class="star-filter"></div>
            </aside>

            ${model._hoteis.map(n => `
            <article class="hotel-card">
                <section class="front-card">
                    <img class="image" src="${n.imagem}" alt="">
                    <div class="hotel-info">
                        ${this._star(n.avaliacao)}
                        <p class="title">${n.nome}</p>
                        <p class="description">${n.descricao}</p>
                        <input type="submit" value="Book Now" class="book">
                        <input type="button" value="Price History" class="shop">
                    </div>
                    <div class="hotel-price">
                        <p class="nights">${n.estadia} days</p>
                        <p class="price">${(n.estadia * Math.abs(n.preco))}</p>
                        <p class="pernight">\$${n.preco}</p>
                    </div>   
                </section>
                    <!-- <section class="back-card">
                        <div class="graph"></div>
                    </section> -->
            </article>
            `).join('')}`
            : '';
    }

    _star(number) {
        let string = '';
        
        for(let i = 1; i <= number; i++) {
            string += '<span class="star"></span>'   
        }

        return string;
    }

}

