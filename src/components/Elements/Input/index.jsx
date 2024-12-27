const Input = (props) => {
    const {dataFilm, onSearch} = props;
    return (
        <div  className="search">
            <input type="text" onChange={onSearch} placeholder="Cari Film"/>
        </div>
    )
}

export default Input;