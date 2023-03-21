import {Link} from "react-router-dom";


const PageHeader = ({ title,bgImg }: {title: string, bgImg: string}) => {
    return (

        <header id="page-top" className="blog-banner" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container" id="blog">
                <div className="row blog-header text-center">
                    <div className="col-sm-12">
                        <h3>{title}</h3>
                        <h4><Link to={"/"}> Home </Link> &gt;  {title} </h4>
                    </div>
                </div>
            </div>
        </header>

    );
};
export default function About() {

    const productArray = [
        {
            image:'product_1.png',
            title:' Juicy Grapes ',
            price:'$46.00',
            sales:'6%',
            link: 'single-shop'
        },
        {
            image:'product_2.png',
            title:' Red Watermelon ',
            price:'$56.00',
            sales:'',
            link: 'single-shop'
        },
        {
            image:'product_3.png',
            title:' Juicy Orange ',
            price:'$46.00',
            sales:'',
            link: 'single-shop'
        },
        {
            image:'product_4.png',
            title:' Fresh Banana ',
            price:'$46.00',
            sales:'5%',
            link: 'single-shop'
        },
    ]

    const productMap = productArray.map((valu, i) => {
        return(

            <div className="col-md-3 col-sm-12" key={i}>
                <div className="product_wrp">
                    <div className="product_img">
                        <img src={`assets/images/${valu.image}`} alt="product" />
                        <div className="on_sale">
                            <span>{valu.sales}</span>
                        </div>
                    </div>
                    <div className="product_info">

                        <Link to={`/${valu.link}`}>
                            <h4>  {valu.title}  </h4>
                        </Link>

                        <ul className="product_rating">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                        <span className="product_price">{valu.price}</span>
                    </div>
                    <div className="project_view">
                        <a href="#/"><i className="icon-glyph-13"></i></a>
                        <a href="#/" className="project-link"><i className="icon-glyph-52"></i></a>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <section className="product-section">
            <div className="container">
                <div className="base-header">
                    <small> Our Featured Products</small>
                    <h3> Organic products</h3>
                </div>
                <div className="row">

                    {productMap}

                </div>
            </div>
        </section>
    )
}