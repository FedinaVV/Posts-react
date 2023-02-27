import React from 'react';
import InputMain from "./UI/input/InputMain";
import SelectMain from "./UI/select/SelectMain";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <InputMain
                    value={filter.guery}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder="Поиск..."
                />

                <SelectMain
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По заголовку'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
    );
};

export default PostFilter;