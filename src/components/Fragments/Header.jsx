import Input from "../Elements/Input";

const Header = (props) => {
    const {dataFilm, onSearch, search} = props;
    return (
        <div className="header">
            <h1>R-Movies</h1>
            <Input dataFilm={dataFilm} onSearch={onSearch} search={search}/>
        </div>
    )
}

export default Header;