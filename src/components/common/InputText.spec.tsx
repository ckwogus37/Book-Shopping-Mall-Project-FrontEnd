import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvier } from "../../context/themeContext"
import InputText from "./InputText";
import React from "react";

describe('InputText 컴포넌트 테스트', ()=>{
    it('렌더를 확인', () => {
        // 1 렌더
        render(
            <BookStoreThemeProvier>
                <InputText placeholder="여기에 입력"></InputText>
            </BookStoreThemeProvier>
        );

        // 2 확인
        expect(screen.getByPlaceholderText('여기에 입력')).toBeInTheDocument();
    });

    it('forwardRed 테스트', ()=>{

        const ref = React.createRef<HTMLInputElement>();
        render(
            <BookStoreThemeProvier>
                <InputText placeholder="여기에 입력" ref={ref}></InputText>
            </BookStoreThemeProvier>
        )

        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    })

})