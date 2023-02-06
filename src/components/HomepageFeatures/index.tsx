import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "도서관",
        Svg: require("@site/static/img/undraw_docusaurus_library.svg").default,
        description: <>구르미들이 읽은 책을 문서화하고 공유합니다.</>,
    },
    {
        title: "강의",
        Svg: require("@site/static/img/undraw_docusaurus_lectures.svg").default,
        description: <>구르미들이 들은 강의를 정리합니다.</>,
    },
    {
        title: "블로그",
        Svg: require("@site/static/img/undraw_docusaurus_blog.svg").default,
        description: <>구르미들이 겪은 경험과 노하우를 공유합니다.</>,
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
