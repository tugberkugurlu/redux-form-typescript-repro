import * as React from 'react';

interface HelloProps {
    readonly to: string;
}

const Hello: React.StatelessComponent<HelloProps> = ({ to }) => <div>
    Hello {to}!
</div>;

class Home extends React.Component<{}, {}> {
    render(): JSX.Element {
        return <div>
            <p>
                <Hello to="World" />
            </p>

            <p>
                This is the home page!
            </p>
        </div>;
    }
}

export default Home;
