import React, { Fragment, useState, useEffect } from 'react'
import NavBar from '../components/Navbar'
import styled from 'styled-components'

const PostList = styled.div`
    display: flex;
    background-color: white;
    border-radius: 8px;
    width: 60vw;
    margin: 0 20vw 5vh 20vw;
    align-items: center;
    padding-left: 2vw;
    box-shadow: 1.5px 1.5px 5px 0px rgba(107,107,107,1);

    &:hover {
        background-color: #bababa;
    }
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: flex-start;
    height: 20vh;
    width: 60vw;
    overflow: hidden;
`

const StyledButton = styled.a`
    color: black;
`

const ArticleTitle = styled.h1`
    background: linear-gradient(to left, #833ab4, #fd1d1d, #fcb045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Noto Sans KR";
    margin-top: 0.5em;
`

const ArticleInfo = styled.p`
    font-family: "Noto Sans KR";
    margin-top: 0.1px;
`

const PlaceHolder = styled.span`
    display: flex;
    height: 10vh;
`

interface InfoOfArticle {
    link: string
    title: string
    description: string
    date: string
    slug?: string
}

const Article = (props: InfoOfArticle) => {
    return (
        <Fragment>
                <StyledButton href={props.link} style={{ textDecoration: 'none' }}>
                    <PostList>
                        <InfoWrapper>
                            <ArticleTitle>{props.title}</ArticleTitle>
                            <ArticleInfo>{props.description}</ArticleInfo>
                            <ArticleInfo>{props.date}</ArticleInfo>
                        </InfoWrapper>
                    </PostList>
                </StyledButton>
        </Fragment>
    )
}

const Blogs: React.FC = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        async function getTableData() {
        const notionTableData = await fetch(
            "https://notion-api.splitbee.io/v1/table/1cede97c79674f2c993bafbadb46122f"
        ).then(res => res.json())

        setTableData(notionTableData.filter((blog: {status: string}) => blog.status === 'live'));
        }

        getTableData();
    }, [])

    return (
        <Fragment>
            <NavBar title="😘" />
            <PlaceHolder />
            <div>
            {tableData.map((blog: InfoOfArticle, index: number) => {
                return (
                <Article
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                    link={'/blog/' + blog.slug}
                    key={index}
                />
                )
            })}
            </div>
        </Fragment>
    )
}

export default Blogs