import './Item.css';


export default function Item({ item }) {
    return (
    
      <div>&nbsp;&nbsp;
        <article className='art'>
            {item.product.title}
          </article>
          &nbsp;
        <div
          className="image-div"
          style={{
            background: `url(${item.product.main_image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="title">
            <div>Only&nbsp;${item.offers.primary.price}!</div>
            
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <button className='cartbtn' type="submit">Add to Cart</button>
          </div>
        </div>
      </div>
  
    );
  }