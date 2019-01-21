import { Observable } from 'rxjs'
import { subscribeTo, Widget } from '@surfboard/ui'

interface BindableComponentProps<State> {
    source: (() => Observable<State>) | string | undefined
}

export default abstract class BindableComponent<P = {}, S = {}> extends Widget<
    BindableComponentProps<S> & P,
    S
> {
    subscribe() {
        const source = this.props.source
        if (!source) {
            return
        }

        if (typeof source === 'function') {
            return (source as Function)()
        } else {
            return subscribeTo(source as string)
        }
    }
}
