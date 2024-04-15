import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import AddCategoryFood from "../Modals/AddCategoryFood";
import AddFood from '../Modals/AddFood'
import { ALL_DATA } from "../Query/ALL_DATA";

const Food = () => {
    const food = ALL_DATA.useFood()
    console.log(food.data);
    return (
        <div>
            <Navbar/>
            <hr />
            <div className="drink-wrap">
                <div className="sm:container px-3 relative">
                    <div className="drink-header flex justify-between relative  my-3">
                        <h2 className="text-[22px] font-bold">Foods</h2>
                        <AddCategoryFood/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta, eaque ipsam, minus eum laudantium ipsum temporibus a quaerat fuga harum exercitationem itaque consequatur pariatur blanditiis modi optio alias unde similique omnis, aperiam rem! Fugit veniam praesentium voluptatum exercitationem omnis reiciendis facere, beatae vel! Eos perspiciatis, illo deleniti quod excepturi voluptatum nulla itaque et temporibus inventore ipsam esse? Error ipsum quas placeat ducimus velit ex deserunt modi! Veritatis atque expedita, reiciendis, debitis dignissimos aspernatur impedit amet corporis architecto commodi quas vel, nemo repellendus nisi soluta sequi. Ratione, iusto! Suscipit dolor libero dolorem cumque adipisci blanditiis eius, praesentium pariatur culpa autem a placeat eaque deleniti impedit ipsum repellat minima ratione rerum sint nulla temporibus architecto soluta reiciendis. Id dolorem repellendus eligendi veritatis inventore, sint pariatur nihil ab quo cum quisquam iusto ut asperiores impedit, error modi provident nostrum, quae quibusdam. Quas hic, expedita eius accusamus impedit explicabo reiciendis blanditiis inventore illo voluptate aut cum dolorum, temporibus dignissimos molestias libero adipisci reprehenderit fugit ad! Vero, quasi voluptas. Qui id et illum nobis placeat accusamus deserunt numquam modi accusantium, voluptatum nam autem nostrum sint delectus nesciunt quam atque alias quasi assumenda, dolores hic fuga. Eius corporis nam quisquam. Id eaque, ipsam minus, quasi ipsum dolorem voluptate quidem voluptatem facere illum reiciendis debitis quisquam doloremque corrupti dignissimos porro praesentium aperiam expedita quae? Velit quo debitis, fuga porro error nisi sint sunt excepturi, esse incidunt voluptate quaerat molestias maxime aspernatur! Blanditiis vero libero ratione dolore sequi, atque hic quia iure quibusdam repellendus natus nemo id?</p>
                    <AddFood/>
                </div>
            </div>
            <MiniNav/>
        </div>
    );
};

export default Food;