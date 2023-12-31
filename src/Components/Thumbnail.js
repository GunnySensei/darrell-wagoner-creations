
const Thumbnail = ({productObject}) => {
    return(
        <>
        <img className="img img-thumbnail productThumb col-8 offset-md-4" src={productObject.link} alt={productObject.title}/>
        <div class="w-100"></div>
        </>
    )
}

export default Thumbnail;