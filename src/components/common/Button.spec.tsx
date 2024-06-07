import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvier } from "../../context/themeContext"
import Button from "./Button";

describe('Button 컴포넌트 테스트', ()=>{
    it('렌더를 확인', () => {
        // 1 렌더
        render(
            <BookStoreThemeProvier>
                <Button size='large' scheme='primary'>제목</Button>
            </BookStoreThemeProvier>
        );

        // 2 확인
        expect(screen.getByText('제목')).toBeInTheDocument();
    });

    it('size props 적용', ()=>{
        const {container} = render(
            <BookStoreThemeProvier>
                <Button size='large' scheme='primary'>제목</Button>
            </BookStoreThemeProvier>
        )

        expect(screen.getByRole('button')).toHaveStyle({
            fontSize : '1.5rem'
        })
    })

})