import { FilterContainer } from "./styles";
import filterIcon from "../../assets/icons/SVG/filter.svg";
import { useState } from "react";
interface FilterProps {
    name: string;
    onFilter: (value: string) => void;
  }

export const FilterTable = ({name, onFilter}: FilterProps) => {
    const [filterValue, setFilterValue] = useState("");

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.target.value);
    };

    const handleFilterButton = () => {
        onFilter(filterValue);
    };

    return (
        <FilterContainer>
            <input className="input-filter" type="text" placeholder={name} value={filterValue} onChange={handleFilter} />
            <button className="button-filter" onClick={handleFilterButton}>
                <img src={filterIcon} alt="filter" className="filter-icon" />
                <span>Filter</span>
            </button>
        </FilterContainer>
    );
};
