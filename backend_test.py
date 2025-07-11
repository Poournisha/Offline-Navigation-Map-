#!/usr/bin/env python3
"""
Backend API Testing Script for Offline Navigation App
Tests all the backend endpoints with Tamil Nadu specific data
"""

import requests
import json
import sys
from typing import Dict, Any, List
import time

# Backend URL from frontend/.env
BACKEND_URL = "https://83bd776b-1460-4551-858d-e69fdaf74839.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

class BackendTester:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        self.results = []
        
    def log_result(self, test_name: str, success: bool, details: str, response_data: Any = None):
        """Log test result"""
        result = {
            'test': test_name,
            'success': success,
            'details': details,
            'response_data': response_data
        }
        self.results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {details}")
        if response_data and isinstance(response_data, (dict, list)):
            print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
        print()

    def test_root_endpoint(self):
        """Test GET /api/ - Root endpoint"""
        try:
            response = self.session.get(f"{API_BASE}/")
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "running" in data["message"].lower():
                    self.log_result("Root Endpoint", True, f"API is running (Status: {response.status_code})", data)
                else:
                    self.log_result("Root Endpoint", False, f"Unexpected response format", data)
            else:
                self.log_result("Root Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Root Endpoint", False, f"Request failed: {str(e)}")

    def test_search_chennai_locations(self):
        """Test GET /api/locations/search?query=Chennai"""
        try:
            response = self.session.get(f"{API_BASE}/locations/search", params={"query": "Chennai"})
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    if len(data) > 0:
                        # Check if results contain Chennai-related locations
                        chennai_found = any("chennai" in str(item).lower() for item in data)
                        if chennai_found:
                            self.log_result("Search Chennai Locations", True, f"Found {len(data)} Chennai locations", data[:2])
                        else:
                            self.log_result("Search Chennai Locations", True, f"Found {len(data)} locations (may not be Chennai-specific)", data[:2])
                    else:
                        self.log_result("Search Chennai Locations", True, "No locations found (empty result is valid)", data)
                else:
                    self.log_result("Search Chennai Locations", False, f"Expected list, got {type(data)}", data)
            else:
                self.log_result("Search Chennai Locations", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Search Chennai Locations", False, f"Request failed: {str(e)}")

    def test_search_tamil_nadu_locations(self):
        """Test GET /api/locations/search?query=Tamil Nadu"""
        try:
            response = self.session.get(f"{API_BASE}/locations/search", params={"query": "Tamil Nadu"})
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    if len(data) > 0:
                        # Check if results contain Tamil Nadu-related locations
                        tn_found = any("tamil nadu" in str(item).lower() for item in data)
                        if tn_found:
                            self.log_result("Search Tamil Nadu Locations", True, f"Found {len(data)} Tamil Nadu locations", data[:2])
                        else:
                            self.log_result("Search Tamil Nadu Locations", True, f"Found {len(data)} locations (may not be TN-specific)", data[:2])
                    else:
                        self.log_result("Search Tamil Nadu Locations", True, "No locations found (empty result is valid)", data)
                else:
                    self.log_result("Search Tamil Nadu Locations", False, f"Expected list, got {type(data)}", data)
            else:
                self.log_result("Search Tamil Nadu Locations", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Search Tamil Nadu Locations", False, f"Request failed: {str(e)}")

    def test_get_bookmarks(self):
        """Test GET /api/bookmarks"""
        try:
            response = self.session.get(f"{API_BASE}/bookmarks")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("Get Bookmarks", True, f"Retrieved {len(data)} bookmarks", data[:2] if data else [])
                else:
                    self.log_result("Get Bookmarks", False, f"Expected list, got {type(data)}", data)
            else:
                self.log_result("Get Bookmarks", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Get Bookmarks", False, f"Request failed: {str(e)}")

    def test_get_offline_areas(self):
        """Test GET /api/offline-areas"""
        try:
            response = self.session.get(f"{API_BASE}/offline-areas")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("Get Offline Areas", True, f"Retrieved {len(data)} offline areas", data[:2] if data else [])
                else:
                    self.log_result("Get Offline Areas", False, f"Expected list, got {type(data)}", data)
            else:
                self.log_result("Get Offline Areas", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Get Offline Areas", False, f"Request failed: {str(e)}")

    def test_search_hospital_pois(self):
        """Test GET /api/pois/search?query=hospital"""
        try:
            response = self.session.get(f"{API_BASE}/pois/search", params={"query": "hospital"})
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    if len(data) > 0:
                        # Check if results contain hospital-related POIs
                        hospital_found = any("hospital" in str(item).lower() for item in data)
                        if hospital_found:
                            self.log_result("Search Hospital POIs", True, f"Found {len(data)} hospital POIs", data[:2])
                        else:
                            self.log_result("Search Hospital POIs", True, f"Found {len(data)} POIs (may not be hospital-specific)", data[:2])
                    else:
                        self.log_result("Search Hospital POIs", True, "No POIs found (empty result is valid)", data)
                else:
                    self.log_result("Search Hospital POIs", False, f"Expected list, got {type(data)}", data)
            else:
                self.log_result("Search Hospital POIs", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Search Hospital POIs", False, f"Request failed: {str(e)}")

    def test_calculate_route(self):
        """Test POST /api/routes/calculate - Chennai Marina Beach to Kapaleeshwarar Temple"""
        try:
            # Chennai Marina Beach coordinates: approximately 13.0475, 80.2824
            # Kapaleeshwarar Temple coordinates: approximately 13.0339, 80.2619
            route_request = {
                "from_name": "Chennai Marina Beach",
                "from_address": "Marina Beach, Chennai, Tamil Nadu, India",
                "from_coordinates": [13.0475, 80.2824],
                "to_name": "Kapaleeshwarar Temple",
                "to_address": "Mylapore, Chennai, Tamil Nadu, India", 
                "to_coordinates": [13.0339, 80.2619],
                "route_type": "driving"
            }
            
            response = self.session.post(f"{API_BASE}/routes/calculate", json=route_request)
            
            if response.status_code == 200:
                data = response.json()
                # Check if response has expected route structure
                required_fields = ["from_location", "to_location", "distance", "duration", "coordinates", "instructions"]
                missing_fields = [field for field in required_fields if field not in data]
                
                if not missing_fields:
                    # Validate that it's a Chennai route
                    chennai_route = ("chennai" in data.get("from_location", {}).get("name", "").lower() or 
                                   "chennai" in data.get("to_location", {}).get("name", "").lower())
                    if chennai_route:
                        self.log_result("Calculate Route", True, f"Route calculated successfully from {data['from_location']['name']} to {data['to_location']['name']}", {
                            "distance": data.get("distance"),
                            "duration": data.get("duration"),
                            "instructions_count": len(data.get("instructions", []))
                        })
                    else:
                        self.log_result("Calculate Route", True, "Route calculated but may not be Chennai-specific", data)
                else:
                    self.log_result("Calculate Route", False, f"Missing required fields: {missing_fields}", data)
            else:
                self.log_result("Calculate Route", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Calculate Route", False, f"Request failed: {str(e)}")

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Backend API Tests for Offline Navigation App")
        print(f"🔗 Testing against: {API_BASE}")
        print("=" * 80)
        
        # Test all endpoints
        self.test_root_endpoint()
        self.test_search_chennai_locations()
        self.test_search_tamil_nadu_locations()
        self.test_get_bookmarks()
        self.test_get_offline_areas()
        self.test_search_hospital_pois()
        self.test_calculate_route()
        
        # Summary
        print("=" * 80)
        print("📊 TEST SUMMARY")
        print("=" * 80)
        
        passed = sum(1 for r in self.results if r['success'])
        total = len(self.results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        print(f"Success Rate: {(passed/total)*100:.1f}%")
        
        if total - passed > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.results:
                if not result['success']:
                    print(f"  - {result['test']}: {result['details']}")
        
        print("\n" + "=" * 80)
        return passed == total

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)