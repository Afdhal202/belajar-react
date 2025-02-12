export function Button({ variant, children }) {
    // console.log(props);
    let _class = "btn btn-lg btn-outline";
    if (variant == "secondary") {
        _class = "btn btn-lg btn-outline btn-secondery";
    } else if (variant == "primary") {
        _class = "btn btn-lg btn-outline btn-primary";
    }
    return (
        <button className={_class} type='button'>
            {children}
        </button>
    );
}

