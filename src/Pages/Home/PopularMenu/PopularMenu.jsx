import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect( () => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
           
    //         setMenu(popularItems)
    //     })
    // }, [])
    console.log(menu);
    return (
        <div className="mb-12">
            <SectionTitle heading='From Our Menu' 
            subHeading='popular Item'>

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                  popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                  
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View full menu</button>
            
        </div>
    );
};

export default PopularMenu;