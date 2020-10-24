import { Button } from './button';

describe('components/Button', () => {
   it('должен создавать DOM элемент кнопки', () => {
      const actualButton = new Button({ text: 'hello' });

      const b = document.createElement('button');
      b.appendChild(document.createTextNode('hello'));

      expect(actualButton._element.innerText).toEqual(b.innerText);
   });

    it('должен ренденрить кнопку', () => {
        const actualButton = new Button({ text: 'hello', id: 'id' });

        expect(actualButton.render()).toEqual('<button class="button" id="id">hello</button>');
    });

    it('должен делать ререндер после обновления свойств', () => {
        const actualButton = new Button({ text: 'hello'});

        const mock = jest.fn();

        actualButton.render = mock;

        actualButton.props.text = '123';

        expect(mock).toBeCalled();

        mock.mockRestore();
    });
});
