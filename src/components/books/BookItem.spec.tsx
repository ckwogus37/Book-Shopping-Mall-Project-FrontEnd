import React from 'react';
import {render} from "@testing-library/react";
import BookItem from './BookItem';
import { BookStoreThemeProvier } from '../../context/themeContext';
import { Book } from '../../models/book.model';

const dummyBook: Book = {
    id: 1,
    title: "dummy book",
    img: 5,
    category_id: 1,
    form: "paperback",
    isbn: "dummy isbn",
    summary: "dummy summary",
    detail: "dummy detail",
    author: "dummy author",
    pages: 100,
    contents: "dummy content",
    price: 10000,
    likes: 1,
    pubDate: "2021-01-01",
};

describe('BookItem', ()=>{
    it('렌더 여부', ()=>{
        const {getByText, getByAltText} = render(
            <BookStoreThemeProvier>
                <BookItem book={dummyBook} />
            </BookStoreThemeProvier>
        )

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText("10,000원")).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
        expect(getByAltText(dummyBook.title)).toHaveAttribute('src', `https://picsum.photos/id/${dummyBook.img}/600/600`);
    });
});
