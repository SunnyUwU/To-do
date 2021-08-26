import cx from "classnames";
import { ReactNode } from "react";

type TaskProps = {
    content: string;
    isDone: boolean;
    children?: ReactNode;
};

export function Task({
    content,
    children,
    isDone = false,
}: TaskProps) {
    return(
        <div
            className={cx(
                "task",
                { done: isDone }
            )}    
        >
            <p>{content}</p>
            <footer>
                <div>{children}</div>
            </footer>
        </div>
    );
}