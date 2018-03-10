# More examples

## Integration with component libraries

Our input masks are also easily integrated with component libraries.

* [`material-ui`](http://material-ui.com) (v0.x-stable) with [`redux-form-material-ui`](http://erikras.github.io/redux-form-material-ui/) wrappers
* [`material-ui@next`](https://material-ui-next.com/) (v1-beta) with [`redux-form-material-ui@next`](http://erikras.github.io/redux-form-material-ui/) wrappers
* [`semantic-ui-react`](https://react.semantic-ui.com)

## Conversion EUR <=> BTC

The following is a use case for [`createNumberMask`](#/number-mask). It consists of two inputs that convert bitcoins to euros and vice versa. Check the demo below the code. Please note that this conversion does not reflect real conversion rates.

```jsx
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change } from 'redux-form';
import { createNumberMask } from 'redux-form-input-masks';

const conversionRate = 6800;

let GettingStarted = props => {
  const btcChange = btc => {
    props.change('gettingStarted', 'EUR', btc * conversionRate);
  };

  const eurChange = eur => {
    props.change('gettingStarted', 'BTC', eur / conversionRate);
  };

  const btcMask = createNumberMask({
    prefix: 'BTC ',
    decimalPlaces: 5,
    locale: 'en-US',
    onChange: btcChange,
  });

  const eurMask = createNumberMask({
    suffix: ' €',
    decimalPlaces: 2,
    locale: 'de',
    onChange: eurChange,
  });

  return (
    <form>
      <div>
        <Field name="BTC" component="input" type="tel" {...btcMask} />
        <Field name="EUR" component="input" type="tel" {...eurMask} />
      </div>
    </form>
  );
};

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
  change: (form, field, value) => dispatch(change(form, field, value)),
});

GettingStarted = connect(mapStateToProps, mapDispatchToProps)(GettingStarted);

export default reduxForm({
  form: 'gettingStarted',
})(GettingStarted);
```
