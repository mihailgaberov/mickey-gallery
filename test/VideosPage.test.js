/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import VideosPage from '../src/components/VideosPage';

const setUp = () => {
  const props = {
    videos: [{ id: 1, test: 'test video' }],
    onHandleSelectVideo: expect.createSpy(),
    selectedVideo: { id: 1, test: 'test video' }
  };
  const Wrapper = mount(<VideosPage {...props} />);
  return { Wrapper };
};
const { Wrapper } = setUp();

describe('Test for Videos Page component', () => {
  it('should assert that the component exist', () => {
    expect(Wrapper).toExist();
  });

  it('should have render  props', () => {
    expect(Wrapper.props().videos).toEqual([{ id: 1, test: 'test video' }]);
    expect(typeof Wrapper.props().onHandleSelectVideo).toEqual('function');
    expect(Wrapper.props().selectedVideo).toEqual({ id: 1, test: 'test video' });
  });

  it('should render self', () => {
    expect(Wrapper.find('h2').text()).toEqual('Videos');
    expect(Wrapper.find('h6').hasClass('title')).toBe(true);
    expect(Wrapper.find('video').length).toEqual(2);
    expect(Wrapper.find('div').length).toEqual(5);
  });
});