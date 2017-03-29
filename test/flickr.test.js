/**
 * Created by mgab on 29/03/2017.
 */
import 'isomorphic-fetch';
import expect from 'expect';
import { flickrImages, shutterStockVideos } from '../src/API/api';

describe('Test for Api', () => {
  it('should call flickr Api', () => {
    flickrImages('rain').then((res) => {
      expect(res.length).toEqual(10);
    });
  });

  it('should call shutterStock Api', () => {
    shutterStockVideos('sun').then((res) => {
      expect(res.length).toEqual(10);
    });
  });
});