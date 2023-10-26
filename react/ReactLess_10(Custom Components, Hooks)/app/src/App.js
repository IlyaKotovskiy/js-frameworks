import { Button } from "./components/ui/Button/Button";

export function App() {
    return (
        <div>
            <Button
                title={'Apply Now'}
                theme={'black'}
                onClick={() => console.log('Search')}
            />
            <Button
                title={"Apply Now - It's Free"}
                theme={'green'}
                onDoubleClick={() => console.log('Auth')}
            />
            <Button
                title={"Sign-Up Using Google"}
                theme={'white'}
                onDoubleClick={() => console.log('Auth')}
            />
        </div>
    )
}