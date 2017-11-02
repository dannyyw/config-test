export class AppConfig {

  public static COMPONENTS = [
    {
      name: 'Component 1',
      status: false,
      elementId: 'ele1'
    },
    {
      name: 'Component 2',
      status: false,
      elementId: 'ele2'
    },
    {
      name: 'Component 3',
      status: false,
      elementId: 'ele3'
    }
  ];

  public static ELEMENTS = [
    {
      name: 'Element 1',
      id: 'ele1',
      model: 'element1',
      type: 'text',
      status: false
    },
    {
      name: 'Element 2',
      id: 'ele2',
      model: 'element2',
      type: 'checkbox',
      status: false
    },
    {
      name: 'Element 3',
      id: 'ele3',
      model: 'element3',
      type: 'date',
      status: false
    }
  ];
}
