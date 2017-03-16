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
            <div>
                <Hello to="World" />
            </div>

            <div>
                This is the home page!
            </div>
        </div>;
    }
}

export default Home;
