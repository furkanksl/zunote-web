import { useDispatch, useSelector } from "react-redux";
import { setIsSorting } from "redux/features/category.reducer";
import { setIsCategoryVisible } from "redux/features/dialog.reducer";
import { StateModel } from "redux/store/store";

import CategoryBlackSvgComponent from "components/Svg/CategoryBlackSvg";

import styles from "../NotesPage.module.scss";

function SelectCategoryBox() {
    const dispatch = useDispatch();

    const sortingCategory = useSelector((state: StateModel) => state.category.sortingCategory);

    const selectCategory = () => {
        dispatch(setIsSorting(true));
        dispatch(setIsCategoryVisible(true));
    };

    return (
        <div className={styles["select-category"]} onClick={selectCategory}>
            <CategoryBlackSvgComponent function={selectCategory} />
            <p>{sortingCategory}</p>
        </div>
    );
}

export default SelectCategoryBox;
