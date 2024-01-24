
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Cards } from "../Cards";

import { Container } from './styles'

export function Section({ cards, ...rest }) {
    return (
        <Container>
            <div className="CarouselSection">
                <div className="carousel">
                    <button
                        type="button"
                        className="arrow-left button"
                        aria-label="Previous Image"
                    >
                        <FiChevronLeft size={40} color="#FFFFFF" />
                    </button>

                    <button
                        type="button"
                        className="arrow-right button"
                        aria-label="Previous Image"
                    >
                        <FiChevronRight size={40} color="#FFFFFF" />
                    </button>
                    <div className="cardSection">
                        <Cards />
                    </div>
                </div>
            </div>
        </Container>
    )
}