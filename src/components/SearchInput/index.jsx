import { FiSearch } from "react-icons/fi";

import { Input } from "../Input";

export function SearchInput({ handleSearch }) {

    return (
        <Input
            placeholder={`Busque por pratos ou ingredientes`}
            type="text"
            icon={FiSearch}
        />
    );
}